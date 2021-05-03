import { ModalRoot, Close, ModalHead } from "./Modal.elements";

const Modal = ({ toggleModal, savedMovies }) => {
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
      {savedMovies.map((savedmovie) => {
        console.log(savedmovie);
        return <div key={savedmovie.imdbID}>{savedmovie.imdbID}</div>;
      })}
    </ModalRoot>
  );
};

export default Modal;
