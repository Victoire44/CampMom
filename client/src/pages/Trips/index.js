import React from "react";
import API from "../../utils/API";
import Container from '@material-ui/core/Container';

class Trips extends React.Component{
    state = {
        campground: {},
        date: "",
        members: [],
        posts: {
            Gabriel: "Does anyone have an extra sleeping bag? I can't find mine..",
            Derek: "I think Shiv might have an extra.",
            Shiv: "Yea I got you covered bro, literally.",
            Victoire: "I don't get it.",
        }
    }

    render() {
        return (
            <div>
            <h1 style={{ textAlign: "center", fontFamily: "Red Hat Display, sans-serif" }}>My Trip</h1>
            <Container maxWidth="md" style={{ marginTop: 70 }}>
            </Container>
            </div>
        )
    }
}

export default Trips;