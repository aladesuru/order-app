import React from 'react'

const Header = () => 
 <header id="header"> 
    <div className="container">
      <h1>List View Showing the Product</h1>
      <form id="settings">
        <label><input type="checkbox" />Show orders older than a month</label>
      </form>
    </div>
</header>

export default Header ;
