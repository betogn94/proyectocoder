import React from 'react';
import './styles/NavBar.css';
import brand from '../imagen/Supreme_Logo.svg'
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';


const NavBar = () => {
  
  //const brand =
    //'https://upload.wikimedia.org/wikipedia/commons/2/28/Supreme_Logo.svg';
 
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
  <div className='container-fluid'>
    <a className='logotype' href='/'>
      <Link to ='/'>
        <img src={ brand } alt="logo" width='100' />
      </Link>
    </a>
    <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className='navbar-toggler-icon'></span>
    </button>
    <div className='collapse navbar-collapse' id="navbarNavAltMarkup">
      <div className='navbar-nav mx-auto'>
        <a className='nav-link active' aria-current="page" href="/">Home</a>
        <Link to='/categories/streetwear'> <a className='nav-link' href="/Streetwear">Streetwear</a> </Link>
        <Link to='/categories/skate'> <a className='nav-link' href="/Skate">Skate</a> </Link>
      </div>
    </div>
  </div>

    <CartWidget />

</nav>
  );
};

export default NavBar;
