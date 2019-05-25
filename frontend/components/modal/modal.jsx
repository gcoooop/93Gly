import React from "react";
import CreatePostFormContainer from "../posts/create_post_form_container";

const Modal = ({ modal, closeModal }) => {
  let component;
  switch (modal) {
    case "CreatePostFormContainer":
      component = <CreatePostFormContainer />;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={event => event.stopPropagation()}>
        {component}
      </div>
    </div>
  );
};

export default Modal;