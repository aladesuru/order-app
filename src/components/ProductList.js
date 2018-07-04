import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product.js';



class ProductList extends React.Component{

  state = {
    currentPage : 1,
    itemsPerPage : 3
  }

  handler = (e) => {
    this.setState({
      currentPage : Number(e.target.id)
    });
    console.log(e.target.id)
  }

  render() {
    let date = new Date();
    let delivered = '';
    let data = [];
    this.props.toggleData ? data = this.props.sortedData : data = this.props.matchData ;
    const indexofLastItem = this.state.currentPage * this.state.itemsPerPage;
    const indexofFirstItem = indexofLastItem - this.state.itemsPerPage ;
    const perPageItem = data.slice(indexofFirstItem , indexofLastItem);
    const pageNumber = [];
    for (let i = 1 ;  i <= Math.round(data.length / this.state.itemsPerPage) ; i++) {
      pageNumber.push(i);
    }

    const renderPageNumber = pageNumber.map((pageNumber) =>{
      return(
          <span 
            key={pageNumber} 
            id={pageNumber} 
            onClick= { this.handler }
          > 
           {pageNumber} 
          </span>
        );
    });

    console.log(pageNumber);
    return(
      <section id="product-list">
        <div className="container">
        {
           perPageItem.map((product , index) => {
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
        <div className="container">
          {renderPageNumber}
        </div>
      </section> 
    );
  }
}
 
ProductList.propTypes = {
  sortedData: PropTypes.array.isRequired,
  matchData: PropTypes.array.isRequired,
  toggleData : PropTypes.bool.isRequired
}
export default ProductList;
