export default function Product(props) {
  return (
    <div className="site-container">
      <div className="itemContainer">
        <i className="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
        <div className="itemCard">
          <div className="image-container">
            <img
              src={props.data.thumbnail}
              className="img"
              alt="Apple Computer"
            />
          </div>
          <div className="text-container">
            <span className="itemDescription">{props.data.title} :</span>
            <span className="itemDescriptionExcerse">{props.data.description}</span>
          </div>
          <div className="text-container">
            <span className="itemDescription">Price:</span>
            <span className="itemDescriptionExcerse">{props.data.price}</span>
          </div>
          <div className="text-container">
            <span className="itemDescription">Discount Percentage:</span>
            <span className="itemDescriptionExcerse">
              {props.data.discountPercentage}
            </span>
          </div>
          <div className="text-container">
            <span className="itemDescription">Rating:</span>
            <span className="itemDescriptionExcerse">
              {props.data.rating}/5
            </span>
          </div>
          <div className="text-container">
            <span className="itemDescription">Total:</span>
            <span className="itemDescriptionExcerse">{props.data.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
