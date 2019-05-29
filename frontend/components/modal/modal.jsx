import React from "react";
import CreatePostFormContainer from "../posts/create/create_post_form_container";

const Modal = ({ modal, closeModal, clearUploadedPostEntities }) => {
  let component;
  let handleClick;
  switch (modal) {
    case "CreatePostFormContainer":
      component = <CreatePostFormContainer />;
      handleClick = () => {
        closeModal();
        clearUploadedPostEntities();
      };
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={handleClick}>
      <div className="modal-child" onClick={event => event.stopPropagation()}>
        {component}
      </div>
    </div>
  );
};

export default Modal;