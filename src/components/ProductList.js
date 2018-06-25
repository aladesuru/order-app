import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product.js';

class ProductList extends React.Component{
  
  componentDidMount = () => this.props.dataRebase();
  componentWillUnmount =() => this.reSetData = null;

  render(){
    let date = new Date();
    let delivered = '';
    return(
      <section id="product-list">
        <div className="container">
        {
          this.props.data.map((product , index) => {
            Date.parse(product.delivery_date) < Date.parse(date) ? delivered='Yes' : delivered='No';
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
   );
  }
}

ProductList.propTypes = {
  data: PropTypes.array.isRequired,
  dataRebase: PropTypes.func.isRequired
}
export default ProductList;
