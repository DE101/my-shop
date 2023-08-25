export default function Product(props) {
  return (
    <div className="site-container">
      <div className="itemContainer">
        <i className="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
        <img src={props.data.thumbnail} className="img" alt="Apple Computer" />
        <div className="text-container">
          <h5 className="card-title">{props.data.title}</h5>
          <p className="text-muted mb-4">{props.data.description}</p>

          <span className="itemDescription">Price</span>
          <span className="itemDescription-excerpt">{props.data.price}</span>

          <span className="itemDescription">Discount Percentage</span>
          <span className="itemDescription-excerpt">{props.data.discountPercentage}</span>

          <span className="itemDescription">Rating</span>
          <span className="itemDescription-excerpt">{props.data.rating}/5</span>
        </div>

        <span className="itemDescription">Total</span>
        <span className="itemDescription-excerpt">{props.data.price}</span>
      </div>
    </div>
  );
}
