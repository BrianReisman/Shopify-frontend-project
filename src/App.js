import { Route, Switch } from "react-router-dom";

import GlobalStyles from "./GlobalComponents";

import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <GlobalStyles>
      <Nav />
      <Switch>
        <Route exact path="/">
          hi
        </Route>
        <Route path="/search">search</Route>
        <Route path="/nominations">nominations</Route>
        <Route path="/about">about the creator</Route>
      </Switch>
      <Footer />
    </GlobalStyles>
  );
}

export default App;
