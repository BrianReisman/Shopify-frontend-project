import { useState } from "react";

// components
import Search from "./components/Search/Search";
import Results from "./components/Results/Results";
import Nav from "./components/Nav/Nav";

// style elements
import { AppRoot } from "./App.elements";

function App() {
  const [savedMovies] = useState([
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTU0NzcwMzc3Ml5BMl5BanBnXkFtZTcwOTE3MzE3MQ@@._V1._CR4,3,324,429_SY132_CR5,0,89,132_AL_.jpg_V1_SX300.jpg",
    },
  ]);
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(null);
  // const [modal, showModal] = useState(false)

  const toggleModal = (e) => {
    console.log("toggle modal");
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
      />
    </AppRoot>
  );
}

export default App;
