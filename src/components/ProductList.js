import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product.js';

let date = new Date();
let delivered = '';
let data = " ";
const ProductList = (props) => {
  if (props.toggleData) {
      data = props.sortedData
  } else {
      data = props.matchData
  }

  return(
    <section id="product-list">
      <div className="container">
      {
        data.map((product , index) => {
          Date.parse(product.delivery_date) < Date.parse(date) ? 
          delivered= <span className="green">Yes</span> : 
          delivered= <span className="red">No</span>;

          return(
            <Product 
            key = { index }
            productPos = { index }
            productName = {product.product }
            productCode = {product.product_code }
            totalPrice = { product.total_price }
            quantity = { product.quantity }
            deliveryAddress = { product.delivery_address }
            deliveryDate = { product.delivery_date}
            orderDate = { product.order_date }
            delivered = { delivered }
          />
          )
        })
      }
      </div>
    </section> 
  )
}
 
ProductList.propTypes = {
  sortedData: PropTypes.array.isRequired,
  matchData: PropTypes.array.isRequired,
  toggleData : PropTypes.bool.isRequired
}
export default ProductList;
