export default function Product(props) {
    return (
        <div class="col-lg-4 col">
          <div class="card text-black">
            <i class="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
            <img
              src={props.data.thumbnail}
              class="card-img-top"
              alt="Apple Computer"
            />
            <div class="card-body">
              <div class="text-center">
                <h5 class="card-title">{props.data.title}</h5>
                <p class="text-muted mb-4">{props.data.description}</p>
              </div>
              <div>
                <div class="d-flex justify-content-between">
                  <span>Price</span>
                  <span>{props.data.price}</span>
                </div>
                <div class="d-flex justify-content-between">
                  <span>Discount Percentage</span>
                  <span>{props.data.discountPercentage}</span>
                </div>
                <div class="d-flex justify-content-between">
                  <span>Rating</span>
                  <span>{props.data.rating}/5</span>
                </div>
              </div>
              <div class="d-flex justify-content-between total font-weight-bold mt-4">
                <span>Total</span>
                <span>{props.data.price}</span>
              </div>
            </div>
          </div>
        </div>
      );
}