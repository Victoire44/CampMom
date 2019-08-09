import React from "react";
// import API from "../../utils/API";
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "./style.css";


class Trips extends React.Component {
    state = {
        campground: {},
        date: "",
        members: [],
        posts: [
            "Gabriel,Does anyone have an extra tent? I can't find mine..",
            "Derek,I think Shiv might have an extra.",
            "Shiv,Yea I got you covered bro, literally. LOL",
            "Victoire,I don't get it."
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
        return (
            <div>
                <h1 style={{ textAlign: "center", fontFamily: "Red Hat Display, sans-serif" }}>My Trip</h1>
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
                    <Button size="small" variant="contained" buttonStyle={{ borderRadius: 25 }}
                        style={{ borderRadius: 25, background: "#9D2F16"}}><a onClick={this.handleMsg} rel="noopener noreferrer" style={{ color: "white" }}> Send </a>
                    </Button>
                </Container>
            </div>
        )
    }
}

export default Trips;