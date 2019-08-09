import React from "react";
import API from "../../utils/API";
import Cards from "../../components/Cards"
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

const title = {
    textAlign: "center",
    fontFamily: "Red Hat Display, sans-serif"
};

class Favorites extends React.Component {

    state = {
        campgrounds: [],
        loading: false
    }

    componentDidMount = () => {
        this.setState({ loading: true })
        API.getFavoriteCampgrounds()
            .then(campgrounds => {
                this.setState({ campgrounds: campgrounds, loading: false })
            })
            .catch(err => {
                this.setState({ loading: false })
                console.log(err)
            })
    }

    render() {
        return (
            <div>
                <h1 style={title}>My favorites</h1>

                <Container maxWidth="md" style={{ marginTop: 70 }}>
                    {this.state.loading ?
                        <div style={{ textAlign: "center", color: "#c63d1e" }}>
                            <CircularProgress color="secondary" />
                        </div> :
                        this.state.campgrounds.length === 0 ?
                            <h3 style={title}>You don't have favorites</h3> :
                            <Cards campgrounds={this.state.campgrounds} />
                    }
                </Container>
            </div >
        )
    }
}


export default Favorites;
