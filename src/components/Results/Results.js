import React from "react";
import {
  ResultsRoot,
  MovieCard,
  MovieCardTitle,
  MovieCardNominateBtn,
  MovieCardYear,
  MovieCardImg,
  ImageDiv,
  Info,
} from "./Results.elements";

const Results = ({ movies, totalResults }) => {
  console.log(movies);
  return (
    <ResultsRoot>
      <h3>{/* Showing {movies.length} of {totalResults} results */}</h3>
      {movies.map((movie) => {
        return (
          <MovieCard>
            <Info>
              <MovieCardTitle>{movie.Title}</MovieCardTitle>
              <MovieCardYear>{movie.Year}</MovieCardYear>
            </Info>
            <MovieCardNominateBtn>Nominate</MovieCardNominateBtn>
          </MovieCard>
        );
      })}
      {/* <button>more</button> */}
    </ResultsRoot>
  );
};

export default Results;
