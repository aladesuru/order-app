import React from 'react';
import PropTypes from 'prop-types';

class FilterSection extends React.Component{
  
  state = {
    placeHolderText : 'product name'
  }


  searchByOptionchange = () => {
    this.setState({
      placeHolderText : this.filterby.value 
    });
    this.searchText.value = '';
    this.searchText.focus();
  }

  sortBy = () => {
    this.props.sortBy(this.sortby.value , this.orderDirection.value)
  }


  filterBy = e => {
     e.preventDefault();
    this.props.filterBy(this.filterby.value , this.searchText.value)
  }

  render() {
    return(
      <section id="filter-area">
      <div className="container"> 
        <form>
          <div className="filterby">

            <div className="filter-by-option-container">
              <label htmlFor="filter">Filter BY</label>
              <select id="filter" onChange={ this.searchByOptionchange } ref={(select) => this.filterby = select }>
                <option value="product name">Name</option>
                <option value="code">Product Code</option>
                <option value="address">Delivery Address</option>
              </select>
            </div>

            <div className="filter-text-container">
              <input type="text" name="" placeholder={`Enter ${this.state.placeHolderText} here`} 
              ref={(input) => this.searchText = input } required />
              <input type="submit"  value="Search" onClick={ this.filterBy } />
            </div>

          </div>

          <div className="sortby">
            <label htmlFor="filter">Sort BY </label>
            <select id="filter" ref={(select) => this.sortby = select } 
              onChange={this.sortBy }>
              <option value="order_date">Order Date</option>
              <option value="total_price">Price</option>
            </select>

             <select ref={(select) => this.orderDirection = select } 
              onChange={this.sortBy }>
              <option value="desc">Desc</option>
              <option value="Ascn">Asc</option>
             </select>
          </div>
        </form>
      </div> 
    </section>
    )
  }
}

FilterSection.propTypes = {
  sortBy: PropTypes.func.isRequired,
  filterBy: PropTypes.func.isRequired
}
export default FilterSection;
