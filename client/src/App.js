import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Game from "./Components/Game/Game";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/game" component={Game} />
      </Switch>
    </>
  );
}

export default App;
