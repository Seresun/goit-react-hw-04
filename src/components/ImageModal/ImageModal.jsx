import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import styles from './ImageModal.module.css';

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div className={styles.modalContent}>
        <img src={image.urls.regular} alt={image.alt_description} />
        <p>Author: {image.user.name}</p>
        <p>Likes: {image.likes}</p>
        <button onClick={onRequestClose}>Close</button>
      </div>
    </ReactModal>
  );
};

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  image: PropTypes.object.isRequired,
};

export default ImageModal;
