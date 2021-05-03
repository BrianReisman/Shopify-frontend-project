import { ModalRoot, Close } from "./Modal.elements";

const Modal = ({ toggleModal }) => {
  return (
    <ModalRoot>
      <Close
        onClick={() => {
          toggleModal();
        }}
      >
        &times;
      </Close>
    </ModalRoot>
  );
};

export default Modal;
