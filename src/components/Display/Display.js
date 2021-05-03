import React from "react";
import Nominations from "./Nominations/Nominations";
import Results from "./Results/Results";

import { DisplayRoot } from "./Display.elements";

const Display = ({ movies, savedMovies, totalResults }) => {
  return (
    <DisplayRoot>
      <Results movies={movies} totalResults={totalResults}/>
      <Nominations savedMovies={savedMovies} />
    </DisplayRoot>
  );
};

export default Display;
