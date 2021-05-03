import React from "react";
import { NominationsRoot } from "./Nominations.elments";

const Nominations = ({ savedMovies }) => {

  return (
    <NominationsRoot>
      <h2>Nominations</h2>
      <div>
        <img src={savedMovies[0].Poster} alt="" />
      </div>
    </NominationsRoot>
  );
};

export default Nominations;
