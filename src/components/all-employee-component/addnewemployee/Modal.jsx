import ReactModal from "react-modal";
import "./Modal.css";
import PropTypes from "prop-types";
const Modal = ({ isOpen, onRequestClose, children }) => {

  return (
       <ReactModal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Add New Employee"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
     <div className="modal-container">
        {children}
        <span className="form-action-wrap">
        {/* <button className='form-button-side' type="button">Save</button> */}
        <button className="close-form-button" onClick={onRequestClose}>X</button>
        </span>
     </div>
      </ReactModal>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
  children: PropTypes.node,
};

export default Modal;
