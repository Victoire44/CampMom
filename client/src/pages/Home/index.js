import React from "react";
import Cards from "../../components/Cards"

class Home extends React.Component {

    render() {
        return (
            <Cards campgrounds={this.props.campgrounds} />
        )
    }
}

export default Home;
