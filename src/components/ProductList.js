import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product.js';

const ProductList = (props) => 
<section id="product-list">
  <div className="container">
  {
    props.data.map((product , index) => 
      <Product 
        key = { index }
        productPos = { index }
        productName = { product.product }
        productCode = { product.product_code }
        totalPrice = { product.total_price }
        quantity = { product.quantity }
        deliveryAddress = { product.delivery_address }
        deliveryDate = { product.delivery_date}
        orderDate = { product.order_date }

      /> )
  }
  </div>
</section> 

ProductList.propTypes = {
  data: PropTypes.array.isRequired
}
export default ProductList;
