import React from "react";
import {
  ResultsRoot,
  MovieCard,
  MovieCardNominateBtn,
  Info,
  ShowMoreBtn,
  Showing,
} from "./Results.elements";

const Results = ({
  savedMovies,
  movies,
  totalResults,
  addNomination,
  searchSubmitHandler,
}) => {
  const savedMovieHash = {};
  savedMovies.forEach((savedmovie) => {
    if (!savedMovieHash[savedmovie.imdbID]) {
      savedMovieHash[savedmovie.imdbID] = 1;
    }
  });

  return (
    movies.length > 0 && (
      <ResultsRoot>
        <Showing>
          Showing {movies.length} of {totalResults} results
        </Showing>
        {movies.map((movie, i) => {
          let disabled = false;
          if (savedMovieHash[movie.imdbID]) {
            disabled = true;
          } else if (savedMovies.length >= 5) {
            disabled = true;
          }
          return (
            <MovieCard key={i}>
              <Info>
                {movie.Title} ({movie.Year})
              </Info>
              <MovieCardNominateBtn
                disabled={disabled}
                onClick={() => {
                  addNomination(movie);
                }}
              >
                Nominate
              </MovieCardNominateBtn>
            </MovieCard>
          );
        })}
        {totalResults > movies.length && (
          <ShowMoreBtn onClick={searchSubmitHandler}>Show more</ShowMoreBtn>
        )}
      </ResultsRoot>
    )
  );
};

export default Results;
