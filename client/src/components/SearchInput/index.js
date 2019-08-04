import React from 'react';
import deburr from 'lodash/deburr';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import API from "../../utils/API";


const suggestions = [
  { label: "Acadia" }, { label: "American Samoa" }, { label: "Arches" },
  { label: "Badlands" }, { label: "Big Bend" }, { label: "Biscayne" },
  { label: "Black Canyon of the Gunnison" }, { label: "Bryce Canyon" }, { label: "Cabrillo" },
  { label: "Canyonlands" }, { label: "Capitol Reef" }, { label: "Carlsbad Caverns" },
  { label: "Channel Islands" }, { label: "Congaree" }, { label: "Crater Lake" },
  { label: "Cuyahoga Valley" }, { label: "Death Valley" }, { label: "Denali" },
  { label: "Dry Tortugas" }, { label: "Everglades" }, { label: "Gates of the Arctic" },
  { label: "Gettysburg National Military Park" }, { label: "Glacier" }, { label: "Glacier Bay" },
  { label: "Grand Canyon" }, { label: "Grand Teton" }, { label: "Great Basin" },
  { label: "Great Sand Dunes" }, { label: "Great Smoky Mountains" },
  { label: "Guadalupe Mountains" }, { label: "Haleakala" }, { label: "Hawai’i Volcanoes" },
  { label: "Harpers Ferry" }, { label: "Hot Springs" }, { label: "Isle Royale" },
  { label: "Joshua Tree" }, { label: "Katmai" }, { label: "Kenai Fjords" },
  { label: "Kings Canyon" }, { label: "Kobuk Valley" }, { label: "Lake Clark" },
  { label: "Lassen Volcanic" }, { label: "Mammoth Cave" }, { label: "Mesa Verde" },
  { label: "Mount Rainier" }, { label: "North Cascades" }, { label: "Organ Pipe Cactus" },
  { label: "Olympic" }, { label: "Petrified Forest" }, { label: "Pinnacles" }, { label: "Redwood" },
  { label: "Rocky Mountain" }, { label: "Saguaro" }, { label: "Sequoia" },
  { label: "Shenandoah" }, { label: "Theodore Roosevelt" }, { label: "Valley Forge" },
  { label: "Virgin Islands" }, { label: "Voyageurs" }, { label: "Wind Cave" },
  { label: "Wrangell–St. Elias" }, { label: "Yellowstone" }, { label: "Yosemite" }, { label: "Zion" }
];

function renderInputComponent(inputProps) {
  const { classes, inputRef = () => {}, ref, ...other } = inputProps;

  return (
    <TextField
      fullWidth
      InputProps={{
        inputRef: node => {
          ref(node);
          inputRef(node);
        },
        classes: {
          input: classes.input,
        },
      }}
      {...other}
    />
  );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.label, query);
  const parts = parse(suggestion.label, matches);

  return (
    <MenuItem selected={isHighlighted} component='div'>
      <div>
        {parts.map(part => (
          <span key={part.text} style={{ fontWeight: part.highlight ? 500 : 400 }}>
            {part.text}
          </span>
        ))}
      </div>
    </MenuItem>
  );
}

function getSuggestions(value) {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
      const keep =
        count < 5 && suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;

      if (keep) {
        count += 1;
      }

      return keep;
    });
}

function getSuggestionValue(suggestion) {
  return suggestion.label;
}

const useStyles = makeStyles(theme => ({
  root: {
    height: 250,
    flexGrow: 1,
  },
  container: {
    position: 'relative',
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  divider: {
    height: theme.spacing(2),
  },
}));

export default function SearchInput(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    single: '',
    popper: '',
  });

  const [stateSuggestions, setSuggestions] = React.useState([]);

  const handleSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const handleSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const handleChange = name => (event, { newValue }) => {
    setState({
      ...state,
      [name]: newValue,
    });
  };

  const handleEnter = (event) => {
    if(event.key === 'Enter') {
      props.handleLoading(true)
      API.getCampground(state.single)
        .then(res => {
          props.handleCampgrounds(res.data.data)
          props.handleLoading(false)
        })
        .catch(err => console.error(err));
    }
  };

  const autosuggestProps = {
    renderInputComponent,
    suggestions: stateSuggestions,
    onSuggestionsFetchRequested: handleSuggestionsFetchRequested,
    onSuggestionsClearRequested: handleSuggestionsClearRequested,
    getSuggestionValue,
    renderSuggestion,
  };

  return (
    <div className={classes.root}>
      <Autosuggest
        {...autosuggestProps}
        inputProps={{
          classes,
          id: 'react-autosuggest-simple',
          label: 'National Parks',
          placeholder: 'Search for a national park for camping information...',
          value: state.single,
          onChange: handleChange('single'),
          onKeyDown: handleEnter,
        }}
        theme={{
          container: classes.container,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion,
        }}
        renderSuggestionsContainer={options => (
          <Paper {...options.containerProps} square>
            {options.children}
          </Paper>
        )}
      />
    </div>
  );
}
