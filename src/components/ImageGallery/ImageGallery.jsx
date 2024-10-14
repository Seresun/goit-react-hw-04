import PropTypes from "prop-types";
import ImageCard from "../ImageCard/ImageCard";

function ImageGallery({ images, onImageClick }) {
  return (
    <ul className="gallery">
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} onClick={() => onImageClick(image)} />
        </li>
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
