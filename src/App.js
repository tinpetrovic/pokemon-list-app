import React from "react"
import { Switch, Route } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar";
import Landing from "./Components/Landing/Landing";
import Main from "./Components/Main/Main";
import Specific from "./Components/Specific/Specific";
import "./global.scss"



function App() {

  return (
    <div>
      <Switch>
        <Route exact path="/pokemon-list-app/">
          <Landing/>
        </Route>

        <Route path="/pokemon-list-app/main">
          <Navbar />
          <Main />
        </Route>

        <Route path="/pokemon-list-app/:pokemonid">
          <Navbar />
          <Specific />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
