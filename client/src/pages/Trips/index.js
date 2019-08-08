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

class Trips extends React.Component {
    state = {
        campground: {},
        date: "",
        members: [],
        posts: {
            Gabriel: "Does anyone have an extra sleeping bag? I can't find mine..",
            Derek: "I think Shiv might have an extra.",
            Shiv: "Yea I got you covered bro, literally. LOL",
            Victoire: "I don't get it.",
        }
    }

    render() {
        return (
            <div>
                <h1 style={{ textAlign: "center", fontFamily: "Red Hat Display, sans-serif" }}>My Trip</h1>
                <Container maxWidth="md" style={{ marginTop: 70 }}>
                    <List>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <ImageIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={Object.keys(this.state.posts)[0]} secondary={this.state.posts.Gabriel} />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <ImageIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={Object.keys(this.state.posts)[1]} secondary={this.state.posts.Derek} />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <ImageIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={Object.keys(this.state.posts)[2]} secondary={this.state.posts.Shiv} />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <ImageIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={Object.keys(this.state.posts)[3]} secondary={this.state.posts.Victoire} />
                        </ListItem>
                    </List>
                </Container>
            </div>
        )
    }
}

export default Trips;