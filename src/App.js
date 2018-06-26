import React  from 'react';
import './App.css';
import { data } from './db.js'; 
import Header from './components/Header.js';
import FilterSection from './components/FilterSection.js';
import ProductList from './components/ProductList.js';

class OrderApp extends React.Component {

  state = { 
    orderlist :  data,
    searchData : [],
    sortOrder : "desc",
    sortBY : "order_date",
    searchValue: "",
    searchBy: "",
    toggleData : true
  }
              
  componentDidMount = () => this.sortBy() 

  componentWillUnmount = () => this.sortBy = null;

  sortBy = ( option = this.state.sortBY  , orderDirection = this.state.sortOrder) => {
    let sortData = this.state.orderlist ;
    this.setState({ 
      sortOrder: orderDirection,
      sortBY: option
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

    this.setState({ 
      orderlist : sortData,
      toggleData : true 
    });
  }

  filterBy = (searchBy , searchedValue = "") => {
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
          if ( Date.parse(list[searchBy]) > date.setMonth(date.getMonth() + 1) ){
              matchData.push(list);
          } 
      }   
    }

    if (matchData.length !== 0 ) {
          this.setState({
            searchData : matchData,
            toggleData : false
          });
        }  
  }

  render() {
    return (
      <div>
        <Header showOldOrders = {this.filterBy } showAllOrder = { this.sortBy }/>
        <FilterSection sortBy = { this.sortBy } filterBy = { this.filterBy } />
        <ProductList 
          sortedData = { this.state.orderlist }  
          matchData = { this.state.searchData }
          toggleData = { this.state.toggleData } />
      </div>
    );
  }
}

export default OrderApp;
