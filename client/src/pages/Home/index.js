import React from "react";
import Cards from "../../components/Cards"
import Container from '@material-ui/core/Container';
import LinearProgress from '@material-ui/core/LinearProgress';

class Home extends React.Component {

    render() {
        return (

            <div>
                {this.props.loading ?
                    <LinearProgress color="secondary" /> :
                    <Container maxWidth="md" style={{ marginTop: 70 }}>
                        <Cards campgrounds={this.props.campgrounds} />
                    </Container>}
            </div>

        )
    }
}

export default Home;
