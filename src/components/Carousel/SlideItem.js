import "./Carousel.css";
const SlideItem = ({ slide }) => {
  console.log(slide.image);
  return (
    <div className="item">
      <div className="slide-image-container">
        <img className="slide-image" src={slide.image} alt={slide.name} />
        <h6 className="slide-description">{slide.description}</h6>
      </div>
    </div>
  );
};

export default SlideItem;
