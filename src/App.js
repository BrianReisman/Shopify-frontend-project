import { useState } from "react";

// components
import Search from "./components/Search/Search";
import Display from "./components/Display/Display";

// elements
import { BackgroundImg, Title } from "./App.elements";

function App() {
  const [savedMovies] = useState([
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTU0NzcwMzc3Ml5BMl5BanBnXkFtZTcwOTE3MzE3MQ@@._V1._CR4,3,324,429_SY132_CR5,0,89,132_AL_.jpg_V1_SX300.jpg",
    },
  ]);
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(null);
  console.log(movies);
  console.log("total results", totalResults);

  return (
    <BackgroundImg>
      <Title>The Shoppies</Title>
      <Search
        movies={movies}
        setMovies={setMovies}
        setTotalResults={setTotalResults}
      />
      {/* <Root> */}
      <Display
        savedMovies={savedMovies}
        movies={movies}
        totalResults={totalResults}
      />
      {/* </Root> */}
    </BackgroundImg>
  );
}

export default App;
