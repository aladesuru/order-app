import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component{
  state = {
    toggleList : true
  }

  showOldOrders = () => {
    this.props.showOldOrders("order_date");
    this.setState({ toggleList: false });
  } 
  
  showAllOrder = () => {
    this.props.showAllOrder();
    this.setState({ toggleList: true });
  }

	render(){
    if (this.state.toggleList) {
      this.listBtn = <label><input type="checkbox" 
                        onClick = { this.showOldOrders }
                        />Show orders older than a month ?
                      </label>
    } else {
      this.listBtn = <label><input type="checkbox"  
                        onClick = { this.showAllOrder }
                        />Order older than a month, back to all orders ?
                      </label>
    }

		return(
      <header id="header"> 
        <div className="container">
          <h1>List of Ordered Product</h1>
          <form id="settings">
            {this.listBtn }
          </form>
        </div>
      </header>
		)
	}
}

Header.propTypes = {
  showOldOrders: PropTypes.func.isRequired,
  showAllOrder : PropTypes.func.isRequired
}

export default Header ;
