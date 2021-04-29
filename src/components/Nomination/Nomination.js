import React from "react";
import { ViewRoot, ViewHeader } from "../../GlobalComponents";
import { Saved, X } from "./NominationElements";

const Nomination = (props) => {
  // console.log("props from Nomination.js>>>", props);

  const savedMovies = props.savedMovies.map((movie) => {
    return (
      <Saved>
        {movie.Title}
        <X>&#10006;</X>
      </Saved>
    );
  });

  return (
    <ViewRoot>
      <ViewHeader>Your Nominations!</ViewHeader>
      {props.savedMovies && savedMovies}
    </ViewRoot>
  );
};

export default Nomination;
