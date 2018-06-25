import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component{

  state = {
    toggleList : true,
    unchecked : false
  }

  showOldOrders = () => {
    this.props.showOldOrders("order_date");
    this.setState({ toggleList: false });
  } 
  
  showAllorder = () => {
    this.props.dataRebase();
    this.setState({ toggleList: true });
  }

	render(){

    if (this.state.toggleList) {
      this.listBtn = <label><input type="checkbox" 
                        onClick = { this.showOldOrders }
                        />Show orders older than a month
                      </label>
    } else {
      this.listBtn = <label><input type="checkbox"  
                        onClick = { this.showAllorder }
                        />Order older than a month, back to all orders?
                      </label>
    }

		return(
      <header id="header"> 
        <div className="container">
          <h1>List Of Ordered Product</h1>
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
  dataRebase : PropTypes.func.isRequired
}

export default Header ;
