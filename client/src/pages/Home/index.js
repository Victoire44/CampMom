import React from "react";
import Cards from "../../components/Cards"
import Container from '@mui/material/Container';
import LinearProgress from '@mui/material/LinearProgress';

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
