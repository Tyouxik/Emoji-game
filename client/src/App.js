import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import ClassicSolo from "./pages/ClassicSolo";
import Instructions from "./pages/Instructions";
//import { withRouter } from "react-router-dom";
import AllCardsSolo from "./pages/AllCardsSolo";
import ClassicMulti from "./pages/ClassicMulti";
import LandingMulti from "./pages/LandingMulti";
import UnderConstruction from "./pages/UnderConstruction";

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
    </div>
  );
}

export { App };
