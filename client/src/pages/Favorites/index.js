import React from "react";
import API from "../../utils/API";
import Cards from "../../components/Cards"


class Favorites extends React.Component {
    state = {
        campgrounds: []
    }

    componentDidMount = () => {
        API.getFavorites().then(campgrounds => {
            console.log(campgrounds)
            this.setState({campgrounds: campgrounds})
        })
    }

    render() {
        return (
            <div>
                <Cards campgrounds={this.state.campgrounds} />
            </div>
        )
    }
}


export default Favorites;
