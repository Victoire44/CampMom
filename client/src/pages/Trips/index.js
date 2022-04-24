import React from "react";
// import API from "../../utils/API";
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Maps from '../../components/Maps';
import "./style.css";


class Trips extends React.Component {
    state = {
        campground: {},
        date: "",
        members: [],
        posts: [
            "Gabriel Jacobs,Does anyone have an extra tent? I can't find mine.",
            "Derek Goldman,I think Shiv might have an extra.",
            "Raghav Shiv,Yea I got you covered bro.. literally. LOL",
            "Victoire Baron,I don't get it."
        ],
        input: ""
    }

    handleChange = event => {
        this.setState({ input: event.target.value })
    }

    handleMsg = () => {
        var msg = JSON.parse(localStorage.getItem('name')) + "," + this.state.input;
        this.setState({
            posts: [...this.state.posts, msg],
            input: "",
        })
    }

    render() {
        var position = { lat: 37.736247, lng:  -119.563812};

        return (
            <div>
                <h1 style={{ textAlign: "center", fontFamily: "Red Hat Display, sans-serif" }}>Yosemite - Upper Pines - September, 8, 2019</h1>
                <Container maxWidth="md" style={{ marginTop: 70 }}>
                <p>The Upper Pines Campground is located in breathtaking Yosemite National Park in Central California's rugged Sierra Nevada Mountain Range. The campground is 25 miles from Yosemite Valley at an elevation of 4,875 feet. Within Yosemite, visitors can gaze upon waterfalls, sheer granite cliffs, deep valleys, grand meadows, ancient giant sequoias, vast wilderness areas and much more.</p>
                <div style={{ height: 400, }}>
                    <Maps
                        position={position}
                    />
                </div>
                </Container>

                <Container maxWidth="md" style={{ marginTop: 70 }}>
                    <List>
                        {
                            this.state.posts.map(post => {
                                return (
                                    <div>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <ImageIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary={post.split(",")[0]} secondary={post.split(",")[1]} />
                                        </ListItem>
                                        <Divider variant="inset" component="li" />
                                    </div>
                                )
                            })
                        }
                    </List>
                    <TextField
                        id="filled-with-placeholder"
                        label="Message about your upcoming trip..."
                        placeholder="Let your fellow campers know what is going on!"
                        margin="normal"
                        variant="filled"
                        className="postIn"
                        onChange={this.handleChange}
                        value={this.state.input}
                    />
                    <Button onClick={this.handleMsg} size="small" variant="contained" buttonstyle={{ borderRadius: 25 }}
                        style={{ borderRadius: 25, background: "#9D2F16", color: "white" }}>Send
                    </Button>
                </Container>
            </div>
        )
    }
}

export default Trips;