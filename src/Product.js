export default function Product(props) {
    return (
        <div className="col-lg-4 col">
          <div className="card text-black">
            <i className="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
            <img
              src={props.data.thumbnail}
              className="card-img-top"
              alt="Apple Computer"
            />
            <div className="card-body">
              <div className="text-center">
                <h5 className="card-title">{props.data.title}</h5>
                <p className="text-muted mb-4">{props.data.description}</p>
              </div>
              <div>
                <div className="d-flex justify-content-between">
                  <span>Price</span>
                  <span>{props.data.price}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Discount Percentage</span>
                  <span>{props.data.discountPercentage}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Rating</span>
                  <span>{props.data.rating}/5</span>
                </div>
              </div>
              <div className="d-flex justify-content-between total font-weight-bold mt-4">
                <span className="itemDescription">Total</span>
                <span className="itemDescription-excerpt">{props.data.price}</span>
              </div>
            </div>
          </div>
        </div>
      );
}