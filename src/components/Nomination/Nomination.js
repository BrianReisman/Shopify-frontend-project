import React from "react";
import { ViewRoot, ViewHeader } from "../../GlobalComponents";
import { Saved, X, Message } from "./NominationElements";

const Nomination = ({ savedMovies, setSavedMovies }) => {
  const removeHandler = (e) => {
    const remainingMovies = savedMovies.filter(
      (movie) => movie.imdbID !== e.target.id
    );
    setSavedMovies(remainingMovies);
  };

  const savedList = savedMovies.map((movie, i) => {
    return (
      <Saved key={i}>
        {movie.Title}
        <X id={movie.imdbID} onClick={removeHandler}>
          &#10006;
        </X>
      </Saved>
    );
  });

  return (
    <ViewRoot>
      <ViewHeader>Your Nominations!</ViewHeader>
      <Message>
        {
          savedMovies.length === 0 ? <p>You haven't nominated any movies yet. If you'd like, you can nominate up to five.</p> : savedMovies.length < 5 ?<p>{savedMovies.length} down, {5 - savedMovies.length} left to go!</p> : <p>You have reached your limit!</p>
        }
      </Message>
      {savedMovies && savedList}
    </ViewRoot>
  );
};

export default Nomination;
