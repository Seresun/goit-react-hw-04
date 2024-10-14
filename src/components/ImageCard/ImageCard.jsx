import PropTypes from "prop-types";


function ImageCard({ image, onClick }) {
  return (
    <div className="image-card">
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={onClick}
        className="image"
      />
    </div>
  );
}

ImageCard.propTypes = {
  image: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageCard;
