import React, { Component } from 'react';
import './App.css';
import { data } from './db.js';
import Header from './components/Header.js';
import FilterSection from './components/FilterSection.js';
import ProductList from './components/ProductList.js';

class OrderApp extends Component {

  state = {
    orderlist :  data,
    sortOrder : "desc",
    sortOption : "order_date",
  }

  componentDidMount = () => {
    this.sortOrder();
  }

  sortOrder = ( option = this.state.sortOption  , orderDirection = this.state.sortOrder) => {
    let sortData = this.state.orderlist ;
    // let option = this.state.sortOption
    this.setState({
      sortOrder: orderDirection,
      sortOption: option
    })

    if (this.state.orderlist instanceof Array) {
      if (orderDirection === 'desc') {
          if (option === "order_date") {
            sortData.sort((sortOptionValue1 , sortOptionValue2) => Date.parse(sortOptionValue2[option]) - Date.parse(sortOptionValue1[option]));
          } else {
            sortData.sort((sortOptionValue1 , sortOptionValue2) => sortOptionValue2[option] - sortOptionValue1[option]);
          }

        }else {
          if (option === "order_date") {
            sortData.sort((sortOptionValue1 , sortOptionValue2) => Date.parse(sortOptionValue1[option]) - Date.parse(sortOptionValue2[option]));
          } else {
            sortData.sort((sortOptionValue1 , sortOptionValue2) => sortOptionValue1[option] - sortOptionValue2[option]);
          }
      }
    } 

    this.setState({ orderlist : sortData });
  }

  filter = (searchBy , searchByValue) => {
      let matchData = [] ;

      if (searchBy === "product name") {
          searchBy = "product";

      }else if (searchBy === "code"){
        searchBy = "product_code";
      }else if( searchBy === "address"){
        searchBy = "delivery_address"
      }

    if (this.state.orderlist && this.state.orderlist instanceof Array) {
      for(let list of this.state.orderlist){
          if (searchByValue.toLowerCase() === list[searchBy].toLowerCase()) {
              matchData.push(list);
          } 
      }
        if (matchData.length !== 0 ) {
          this.setState({ orderlist : matchData});
        }else{
           // product-list.innerHTML = '<div style="font-size: 2em;">sorry not available</div>' ;
        }

    }  
  }



  render() {
    return (
      <div>
        <Header />
        <FilterSection sortHandler = { this.sortOrder } filterHandler = { this.filter } />
        <ProductList data = { this.state.orderlist } />
      </div>
    );
  }
}

export default OrderApp;
