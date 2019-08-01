import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SearchInput from '../SearchInput';
import './style.css';

class Header extends Component {
    render() {
        return (
            <div id="j-container">
                <Paper id="jumbotron">
                    <Typography id="title" variant="h2" component="h3">
                        Camp.Mom
                    </Typography>
                    <SearchInput/>
                </Paper>
            </div>
        );
    };
};


export default Header;
