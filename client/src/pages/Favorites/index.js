import React from "react";
import API from "../../utils/API";
import Cards from "../../components/Cards"
import Container from '@material-ui/core/Container';

class Favorites extends React.Component {
    state = {
        campgrounds: []
    }

    componentDidMount = () => {
        API.getFavoriteCampgrounds().then(campgrounds => {
            console.log(campgrounds)
            this.setState({ campgrounds: campgrounds })
        })
    }

    render() {
        return (
            <div>
            <h1 style={{ textAlign: "center", fontFamily: "Red Hat Display, sans-serif" }}>My favorites</h1>
            <Container maxWidth="md" style={{ marginTop: 70 }}>
                <Cards campgrounds={this.state.campgrounds} />
            </Container>
            </div>
        )
    }
}


export default Favorites;
