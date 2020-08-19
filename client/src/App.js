import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Game from "./Components/Game/Game";
import Instructions from "./Components/Instructions/Instructions";
import { withRouter } from "react-router";

const LocationDisplay = withRouter(({ location }) => (
  <div data-testid="location-display">{location.pathname}</div>
));

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/game" component={Game} />
        <Route exact path="/instructions" component={Instructions} />
      </Switch>
      {/* <LocationDisplay /> */}
    </>
  );
}

export { LocationDisplay, App };
