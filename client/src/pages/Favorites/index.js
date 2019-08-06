import React from "react";
import API from "../../utils/API";
import Cards from "../../components/Cards"
import Container from '@material-ui/core/Container';
import { textAlign } from "@material-ui/system";

class Favorites extends React.Component {
    state = {
        campgrounds: []
    }

    componentDidMount = () => {
        API.getFavoriteCampgrounds().then(campgrounds => {
            console.log(campgrounds)
            this.setState({campgrounds: campgrounds})
        })
    }

    render() {
        return (
            <Container maxWidth="md" style={{ marginTop: 70 }}>
                <h1 style={{textAlign: "center"}}>Favorites</h1>
                <Cards campgrounds={this.state.campgrounds} />
            </Container>
        )
    }
}


export default Favorites;
