import PropTypes from "prop-types";
import Modal from "react-modal";

function ImageModal({ isOpen, onRequestClose, image }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      className="modal"
    >
      <button onClick={onRequestClose} className="close-btn">
        Close
      </button>
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        className="modal-image"
      />
    </Modal>
  );
}

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  image: PropTypes.object.isRequired,
};

export default ImageModal;
