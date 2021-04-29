import { Route, Switch } from "react-router-dom";

import GlobalStyles from "./GlobalComponents";

import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";
import Home from "./components/Home/Home";

function App() {
  return (
    <GlobalStyles>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/nominations">nominations</Route>
        <Route path="/about">about the creator</Route>
      </Switch>
      <Footer />
    </GlobalStyles>
  );
}

export default App;
