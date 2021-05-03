import { useState } from "react";
import axios from "axios";

// components
import Search from "./components/Search/Search";
import Results from "./components/Results/Results";
import Nav from "./components/Nav/Nav";
import Modal from "./components/Modal/Modal";

// style elements
import { AppRoot } from "./App.elements";

function App() {
  const [savedMovies, setSavedMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(null);
  const [page] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = (e) => {
    setShowModal(!showModal);
  };

  const addNomination = (movie) => {
    setSavedMovies([...savedMovies, movie]);
  };

  const searchSubmitHandler = (input) => {
    axios
      .get(`https://www.omdbapi.com/?apikey=c951a210&s=${input}&page=${page}`)
      .then((res) => {
        if (res.data.Response === "False") {
          // !! Add error message. Modal?
          console.log("no movie by that title found");
          setMovies([]);
          setTotalResults(0);
        } else {
          setTotalResults(res.data.totalResults);
          setMovies(res.data.Search);
        }
      })
      .catch((err) => {
        // !! Add error message. Modal?
        console.log(err);
      });
  };

  const elevateInput = (input) => {
    searchSubmitHandler(input);
  };

  const removeNomination = (movie) => {
    setSavedMovies(
      savedMovies.filter((savedmovie) => savedmovie.imdbID !== movie.imdbID)
    );
  };

  return (
    <AppRoot>
      <Nav savedMovies={savedMovies} toggleModal={toggleModal} />

      {showModal && (
        <Modal
          toggleModal={toggleModal}
          savedMovies={savedMovies}
          removeNomination={removeNomination}
        />
      )}
      {showModal && (
        <div
          id="overlay"
          className="active"
          onClick={() => {
            toggleModal();
          }}
        ></div>
      )}

      <Search
        searchSubmitHandler={searchSubmitHandler}
        savedMovies={savedMovies}
        elevateInput={elevateInput}
      />

      <Results
        savedMovies={savedMovies}
        movies={movies}
        totalResults={totalResults}
        addNomination={addNomination}
        searchSubmitHandler={searchSubmitHandler}
      />
    </AppRoot>
  );
}

export default App;
