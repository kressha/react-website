import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>Infinite<i class='fa-brands fa-houzz'/></Link>
          <div className='menu-icon' onClick={handleClick}><i className={click ? 'fas fa-times' : 'fas fa-bars'}/></div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to='/residential' className='nav-links' onClick={closeMobileMenu}>Residential</Link>
            </li>
            <li className='nav-item'>
              <Link to='/commercial' className='nav-links' onClick={closeMobileMenu}>Commercial</Link>
            </li>
            <li>
              <Link to='/subscribe' className='nav-links-mobile' onClick={closeMobileMenu}>SUBSCRIBE</Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SUBSCRIBE</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;