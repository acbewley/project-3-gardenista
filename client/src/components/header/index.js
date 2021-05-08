import React from 'react';
import img from '../../images/gardenista-3.png'

const Header = () => {
  return (
    <nav class="navbar navbar-light" style={{backgroundColor: "#5b7444"}}>
      <div class="container">
        <a class="navbar-brand" href="/">
          <img src={img} alt="" width="75" height="93.75" />
        </a>
      </div>
    </nav>
  )
}

export default Header;