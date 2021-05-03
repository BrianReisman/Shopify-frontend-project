import { useState } from "react";

// components
import Search from "./components/Search/Search";
import Results from "./components/Results/Results";
import Nav from "./components/Nav/Nav";

// style elements
import { AppRoot } from "./App.elements";

function App() {
  const [savedMovies, setSavedMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(null);
  // const [modal, showModal] = useState(false)
console.log(savedMovies)
  const toggleModal = (e) => {
    console.log("toggle modal");
  };

  const addNomination = (movie) => {
    setSavedMovies([...savedMovies, movie]);
  };

  const searchMoreMovies = () => {
    console.log("searchMoreMovies");
  };

  return (
    <AppRoot>
      <Nav savedMovies={savedMovies} toggleModal={toggleModal} />

      {/* nominations modal */}

      <Search
        movies={movies}
        setMovies={setMovies}
        setTotalResults={setTotalResults}
      />

      <Results
        savedMovies={savedMovies}
        movies={movies}
        totalResults={totalResults}
        addNomination={addNomination}
        searchMoreMovies={searchMoreMovies}
      />
    </AppRoot>
  );
}

export default App;
