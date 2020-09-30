import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import ClassicSolo from "./Components/Games/SoloGame/ClassicSolo";
import Instructions from "./Components/Instructions/Instructions";
import { withRouter } from "react-router";
import AllCardsSolo from "./Components/Games/SoloGame/AllCardsSolo";
import ClassicMulti from "./Components/Games/MultiplayerGame/ClassicMulti";

const LocationDisplay = withRouter(({ location }) => (
  <div data-testid="location-display">{location.pathname}</div>
));

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/classicsolo" component={ClassicSolo} />
        <Route exact path="/allcardssolo" component={AllCardsSolo} />
        <Route exact path="/classicmulti" component={ClassicMulti} />
        <Route exact path="/instructions" component={Instructions} />
      </Switch>
      {/* <LocationDisplay /> */}
    </>
  );
}

export { LocationDisplay, App };
