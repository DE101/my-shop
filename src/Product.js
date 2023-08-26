export default function Product(props) {
  return (
    <div className="site-container">
      <div className="itemContainer">
        <i className="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
        <img src={props.data.thumbnail} className="img" alt="Apple Computer" />
        <div className="text-container">
          <h5 className="itemDescription">{props.data.title}</h5>
          <p className="itemDescriptionExcerse">{props.data.description}</p>
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
          <span className="itemDescriptionExcerse">{props.data.rating}/5</span>
        </div>
        <div className="text-container">
          <span className="itemDescription">Total:</span>
          <span className="itemDescriptionExcerse">{props.data.price}</span>
        </div>
      </div>
    </div>
  );
}
