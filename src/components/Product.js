import React from 'react';
import PropTypes from 'prop-types';

const Product = (props) => 
<div className="card">    
        <div className="product-image-name-price-container"> 
            <div className="product-image">
              Image here
            </div>
            <div className="product-name-price-container">
              <div className="product-name"><span>{ props.productName }</span></div>
              <div className="product-price"><span>&pound;{props.totalPrice}</span></div>
              <div><label htmlFor={`tab${ props.productPos }`} className="veiw-more">View Details</label></div>
            </div> 
        </div>

        <input type="checkbox"  id={`tab${ props.productPos }`} />
        <ul className="product-more-info">
          <li><span>Delivery Address : </span> <div>{props.deliveryAddress}</div></li>
          <li><span>Product Code :</span> <span>{ props.productCode }</span></li>
          <li><span>Quantity : </span><span>{props.quantity}</span></li>
          <li><span>Order Date : </span><span>{props.orderDate}</span></li>
          <li><span>Delivery Date : </span><span>{props.deliveryDate}</span></li>
          <li><span>Product Delivered : </span>{props.delivered}</li>
        </ul>
</div> 
Product.propTypes = {
  productPos: PropTypes.number.isRequired,
  productName: PropTypes.string.isRequired,
  productCode: PropTypes.string.isRequired,
  totalPrice: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  deliveryAddress : PropTypes.string.isRequired,
  deliveryDate: PropTypes.string.isRequired,
  orderDate: PropTypes.string.isRequired,
  delivered: PropTypes.string.isRequired
}

export default Product ;