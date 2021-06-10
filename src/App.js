import React from "react"
import { Switch, Route } from "react-router-dom"
import HomeContainer from "./Containers/HomeContainer"
import MainContainer from "./Containers/MainContainer"
import DetailContainer from "./Containers/DetailContainer"


function App() {

  return (
    <div>
      <Switch>
        <Route exact path="/pokemon-fetch-app/">
          <HomeContainer/>
        </Route>

        <Route exact path="/pokemon-fetch-app/pokemon/:pokemonId">
          <DetailContainer/>
        </Route>

        <Route path="/pokemon-fetch-app/pokemon">
          <MainContainer/>
        </Route>

        

      </Switch>
    </div>
  );
}

export default App;
