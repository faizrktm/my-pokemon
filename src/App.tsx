import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = React.lazy(
  () => import(/* webpackChunkName: "home-page" */ "./pages/index")
);
const Detail = React.lazy(
  () => import(/* webpackChunkName: "detail-page" */ "./pages/detail")
);
const Pokebag = React.lazy(
  () => import(/* webpackChunkName: "pokebag-page" */ "./pages/pokebag")
);

export default function App() {
  return (
    <Router>
      <React.Suspense fallback={<div>Loading...</div>}>
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
      </React.Suspense>
    </Router>
  );
}
