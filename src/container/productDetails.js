import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../redux/actions/productsActions";
// import { useParams } from "react-router-dom";

const ProductDetails = (props) => {
  const product = useSelector((state) => state.product);
  console.log(product);
  const { price, title, category, description, image } = product;
  const dispatch = useDispatch();
  const { productId } = props.match.params;
  // console.log(productId);

  useEffect(() => {
    const fetchProductDetails = async () => {
      const response = await axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err) => {
          console.log("error", err);
        });

      dispatch(selectedProduct(response.data));
    };
    if (productId && productId !== "") return fetchProductDetails();
  }, [productId]);

  return (
    <div className="ui grid container" style={{ marginTop: "20px" }}>
      {Object.keys(product).length === 0 ? (
        <div>Loading..</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="column lp">
              <img className="ui fluid image" src={image} alt="images" />
            </div>
            <div className="column rp">
              <h1>{title}</h1>
              <h2>
                <a className="ui teal tag label" href="www.google.com">
                  ${price}
                </a>
              </h2>
              <h3 className="ui brown block header">{category}</h3>
              <p>{description}</p>
              <div className="ui red vertical animated button" tabIndex="0">
                <div className="hidden content">
                  <i className="shop icon"></i>
                </div>
                <div className="visible content">Add to Cart</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
