import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";

// import NoMatch from "./pages/NoMatch";
// import Home from "./pages/Home";
// import Favorites from "./pages/Favorites";

class App extends Component {
 
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Wrapper>
            {/* <Route exact path="/" component={Home} /> */}
            {/* <Route exact path="/favorites" component={Favorites} /> */}
            {/* <Route exact path="/noMatch" component={NoMatch} /> */}
          </Wrapper>
        </div>
      </Router>
    )
  };
};

export default App;