import React from "react";
import {
  ResultsRoot,
  MovieCard,
  MovieCardNominateBtn,
  Info,
  ShowMoreBtn,
  Showing,
} from "./Results.elements";

const Results = ({ movies, totalResults, addNomination, searchMoveMovies }) => {
  return (
    movies.length > 0 && (
      <ResultsRoot>
        <Showing>
          Showing {movies.length} of {totalResults} results
        </Showing>
        {movies.map((movie, i) => {
          return (
            <MovieCard key={i}>
              <Info>
                {movie.Title} ({movie.Year})
              </Info>
              <MovieCardNominateBtn
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
          <ShowMoreBtn onClick={searchMoveMovies}>Show more</ShowMoreBtn>
        )}
      </ResultsRoot>
    )
  );
};

export default Results;
