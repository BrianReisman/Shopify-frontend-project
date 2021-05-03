import React from "react";
import {
  ResultsRoot,
  MovieCard,
  MovieCardTitle,
  MovieCardNominateBtn,
  MovieCardYear,
  MovieCardImg,
  Info,
} from "./Results.elements";

const Results = ({ movies, totalResults }) => {
  return (
    <ResultsRoot>
      <h3>
        Showing {movies.length} of {totalResults} results
      </h3>
      {movies.map((movie) => {
        return (
          <MovieCard>
            <MovieCardImg
              src={movie.Poster}
              alt="no Poster availible for this movie"
            />
            <Info>
              <MovieCardTitle>{movie.Title}</MovieCardTitle>
              <MovieCardYear>{movie.Year}</MovieCardYear>
              <MovieCardNominateBtn>+</MovieCardNominateBtn>
            </Info>
          </MovieCard>
        );
      })}
      {/* <button>more</button> */}
    </ResultsRoot>
  );
};

export default Results;
