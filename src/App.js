import { useState } from "react";

import { Route, Switch } from "react-router-dom";

import GlobalStyles from "./GlobalComponents";

import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";
import Home from "./components/Home/Home";
import Nomination from "./components/Nomination/Nomination";
function App() {
  const [savedMovies, setSavedMovies] = useState([]);
  // console.log(savedMovies);

  return (
    <GlobalStyles>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/search">
          <Search setSavedMovies={setSavedMovies} savedMovies={savedMovies} />
        </Route>
        <Route path="/nominations">
          <Nomination setSavedMovies={setSavedMovies} savedMovies={savedMovies}/>
        </Route>
        <Route path="/about">about the creator</Route>
      </Switch>
      <Footer />
    </GlobalStyles>
  );
}

export default App;
