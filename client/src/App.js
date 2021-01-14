import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing";
import ClassicSolo from "./Components/ClassicSolo";
import Instructions from "./Components/Instructions";
//import { withRouter } from "react-router-dom";
import AllCardsSolo from "./Components/AllCardsSolo";
import ClassicMulti from "./Components/ClassicMulti";
import LandingMulti from "./Components/LandingMulti";
import UnderConstruction from "./Components/UnderConstruction";

/* const LocationDisplay = withRouter(({ location }) => (
  <div data-testid="location-display">{location.pathname}</div>
)); */

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/classicsolo" component={ClassicSolo} />
        <Route exact path="/allcardssolo" component={AllCardsSolo} />
        <Route exact path="/landingmulti" component={LandingMulti} />
        <Route exact path="/instructions" component={Instructions} />
        <Route exact path="/classicmulti" component={UnderConstruction} />
      </Switch>
      {/* <LocationDisplay /> */}
    </div>
  );
}

export { App };
