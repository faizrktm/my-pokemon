import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = React.lazy(() => import("./pages/index"));
const Detail = React.lazy(() => import("./pages/detail"));
const Pokebag = React.lazy(() => import("./pages/pokebag"));

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/pokebag">
          <Pokebag />
        </Route>
        <Route path="/:id">
          <Detail />
        </Route>
      </Switch>
    </Router>
  );
}
