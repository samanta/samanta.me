import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import "normalize.css";
import "./components/layout/styles.global.css";
import "./components/layout/styles.variables.css";

import Accessibility from "pages/Accessibility";
import Home from "pages/Home";
import Links from "pages/Links";
import Mentoring from "pages/Mentoring";
import ScrollToTop from "components/layout/ScrollToTop";

export default function App() {
  return (
    <Router>
      <ScrollToTop />

      <Switch>
        <Route path="/links">
          <Links />
        </Route>
        <Route path="/accessibility">
          <Accessibility />
        </Route>
        <Route path="/mentoring">
          <Mentoring />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}
