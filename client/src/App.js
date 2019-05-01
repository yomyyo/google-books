//import react
import React from "react";

//deconstruct object from react router dom as router, route, and switch
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import home page
import Home from "./pages/Home";
//import saved page
import Saved from "./pages/Saved";
//import no match page
import NoMatch from "./pages/NoMatch";
//import nav page
import Nav from "./components/Nav";

//put together the routes
function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
