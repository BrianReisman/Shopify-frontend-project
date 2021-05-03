import { ModalRoot, Close, ModalHead } from "./Modal.elements";
import {
  MovieCard,
  Info,
  MovieCardNominateBtn,
} from "../Results/Results.elements";

const Modal = ({ toggleModal, savedMovies, removeNomination }) => {
  const nominatedMovies = savedMovies.map((savedmovie) => {
    console.log(savedmovie);
    return (
      <MovieCard key={savedmovie.imdbID}>
        <Info>
          {savedmovie.Title} ({savedmovie.Year})
        </Info>
        <MovieCardNominateBtn
          onClick={() => {
            removeNomination(savedmovie);
          }}
        >
          -
        </MovieCardNominateBtn>
      </MovieCard>
    );
  });

  return (
    <ModalRoot>
      <ModalHead>
        <Close
          onClick={() => {
            toggleModal();
          }}
        >
          &times;
        </Close>
      </ModalHead>
      {nominatedMovies}
    </ModalRoot>
  );
};

export default Modal;
