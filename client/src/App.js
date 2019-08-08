import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer"

// import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Trips from "./pages/Trips";


class App extends Component {

  state = {
    campgrounds: [],
    loading: false,
    name: "",
    isLoggedIn: false

  }
  handleLogin = (name,isLoggedIn) =>
  this.setState({name:name,
  isLoggedIn:isLoggedIn})

  handleCampgrounds = campgrounds =>
    this.setState({ campgrounds: campgrounds })

  handleLoading = loading =>
    this.setState({ loading: loading })

  render() {
    return (
      <Router>
        <div>
          <Navbar handleLogin ={this.handleLogin} />
          <Header handleCampgrounds={this.handleCampgrounds} handleLoading={this.handleLoading} />
          <Wrapper>
            <Route path="/" render={props => <Home {...props} campgrounds={this.state.campgrounds} loading={this.state.loading} />} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/trips" component={Trips} />
            {/* <Route path="/noMatch" component={NoMatch} /> */}
          </Wrapper>
          <Footer />
        </div>
      </Router>
    )
  };
};

export default App;