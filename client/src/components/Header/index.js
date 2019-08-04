import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import SearchInput from '../SearchInput';
import './style.css';
import logo from '../Header/logo.png';

class Header extends Component {
    render() {
        return (
            <div id="j-container">
                <Paper id="jumbotron">
                <img id="logo" src={logo} alt="CampMom" />
                    <SearchInput handleCampgrounds={this.props.handleCampgrounds} handleLoading={this.props.handleLoading}/>
                </Paper>
            </div>
        );
    };
};

export default Header;
