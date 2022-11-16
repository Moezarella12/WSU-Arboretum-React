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
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <span class="svg svg--logomark header-main__logo">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 50" height="55" width="55">
                <g fill="#FFF" fill-rule="evenodd">
                    <path d="M7.993 1.833C8.566 2.99 9.642 3.72 10.786 4.31c2.84 1.461 6.34 2.362 7.671 5.42 1.083 2.483.406 5.312-.807 7.638-.347.665-.927 1.513-1.746 1.633 1.126-1.984.463-4.392-1.441-5.76-2.596-1.87-5.111-3.241-6.85-5.938-1.4-2.17-2.799-5.779.018-7.302-.065.644.077 1.255.362 1.833"></path>
                    <path d="M19.906 10.425c-.3-1.085-.696-2.115-.803-3.255-.12-1.265.367-2.565 1.424-3.17.091.778-.04 1.54.322 2.259.755 1.503 1.847 2.573 2.587 4.09.889 1.815.77 4.078-.666 5.44-1.528 1.447-3.42 2.342-4.526 4.211-.484-.973-.161-2.055.221-2.965.864-2.058 2.105-4.207 1.44-6.61m-8.654 2.855c1.156.482 2.243 1.06 3.032 2.115.793 1.061.862 2.38.527 3.605-.65-.73-1.286-1.491-2.232-1.817-1.188-.408-2.37-.624-3.456-1.264-1.058-.62-1.813-1.497-2.442-2.588-.767-1.333-1.093-3.247.151-4.331-.193 1.044-.105 2.315.827 2.894 1.11.69 2.394.887 3.593 1.386m4.75 6.72c2.007 0 3.987.008 5.998.007.004.908-.011 1.727 0 2.677-2.05.726-4.23 1.485-6.243 2.316-2.193-.944-4.56-1.555-6.753-2.498-.01-.885.01-1.57 0-2.495 2.39 0 4.786-.007 6.998-.007m-8.728 5.006c.78 0 1.32 0 2.017-.005-1.076 2.487-1.489 5.223-1.665 7.898-.223 3.376-.456 6.85.557 10.136.343 1.113 1.814 1.828 2.924.973.809-.623 1.09-1.517 1.114-2.438.148-5.456.365-10.95.393-16.503 2.09-.005 3.906.016 6.034 0 .137 5.56.079 11.174.26 16.761.033 1.015.688 2.178 1.647 2.444 1.594.448 2.808-1.315 2.914-2.765.403-5.505.297-11.282-1.764-16.48 3.324 0 6.198.02 9.296 0-1.11 8.252-2.54 16.631-3.697 24.876-2.811-1.08-5.557-2.394-8.603-2.719-5.055-.536-10.179.411-14.645 2.816C2.462 41.706 1.358 33.332 0 25.001c2.457-.004 4.907.005 7.273.005"></path>
                </g>
              </svg>
              </span>
            <i class='fab fa-typo3' />
         
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Tree Tours
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Themes
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Reach us</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;


