import React  from 'react';
import './App.css';
import { data } from './db.js';
import Header from './components/Header.js';
import FilterSection from './components/FilterSection.js';
import ProductList from './components/ProductList.js';

class OrderApp extends React.Component {

  state = {
    orderlist :  data,
    sortOrder : "desc",
    sortOption : "order_date",
  }

  componentDidMount = () => this.sortOrder();
  componentWillUnmount = () => this.sortOrder = null;

  sortOrder = ( option = this.state.sortOption  , orderDirection = this.state.sortOrder) => {
    let sortData = this.state.orderlist ;
    this.setState({
      sortOrder: orderDirection,
      sortOption: option
    })

    if (this.state.orderlist instanceof Array) {
      if (orderDirection === 'desc') {
          if (option === "order_date") {
            sortData.sort((sortOptionValue1 , sortOptionValue2) => 
              Date.parse(sortOptionValue2[option]) - Date.parse(sortOptionValue1[option]));
          } else {
            sortData.sort((sortOptionValue1 , sortOptionValue2) => 
              sortOptionValue2[option] - sortOptionValue1[option]);
          }

        }else {
          if (option === "order_date") {
            sortData.sort((sortOptionValue1 , sortOptionValue2) => 
              Date.parse(sortOptionValue1[option]) - Date.parse(sortOptionValue2[option]));
          } else {
            sortData.sort((sortOptionValue1 , sortOptionValue2) => 
              sortOptionValue1[option] - sortOptionValue2[option]);
          }
      }
    } 

    this.setState({ orderlist : sortData });
  }

  filterOrder = (searchBy , searchedValue = "") => {
      let matchData = [] ;
      let date = new Date();
      if (searchBy === "product name") {
          searchBy = "product";

      }else if (searchBy === "code"){
        searchBy = "product_code";
      }else if( searchBy === "address"){
        searchBy = "delivery_address"
      }else {
        searchBy = "order_date"
      }

    if (this.state.orderlist && this.state.orderlist instanceof Array && searchBy !== "order_date") {
      for(let list of this.state.orderlist){
          if (searchedValue.toLowerCase().trim() === list[searchBy].toLowerCase().trim()) {
              matchData.push(list);
          } 
      }   
    }else{      
      for(let list of this.state.orderlist){
          if ( Date.parse(list[searchBy]) > date ){
              matchData.push(list);
          } 
      }   
    }

    if (matchData.length !== 0 ) {
          this.setState({orderlist : matchData});
        }  
  }

  dataRebase = () => this.setState({ orderlist: data });

  render() {
    return (
      <div>
        <Header showOldOrders = {this.filterOrder } dataRebase = { this.dataRebase } />
        <FilterSection sortHandler = { this.sortOrder } filterHandler = { this.filterOrder } />
        <ProductList data = { this.state.orderlist } dataRebase = { this.dataRebase }/>
      </div>
    );
  }
}

export default OrderApp;
