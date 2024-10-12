import PropTypes from 'prop-types';
import styles from './ImageCard.module.css';

const ImageCard = ({ image }) => {
  return (
    <div className={styles.imageCard}>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
};

ImageCard.propTypes = {
  image: PropTypes.object.isRequired,
};

export default ImageCard;
