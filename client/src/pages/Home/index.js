import React from "react";
import Cards from "../../components/Cards"
import LinearProgress from '@material-ui/core/LinearProgress';

class Home extends React.Component {

    render() {
        return (
            <div>
                {this.props.loading ?
                    <LinearProgress color="secondary" /> :
                    <Cards campgrounds={this.props.campgrounds} />}
            </div>
        )
    }
}

export default Home;
