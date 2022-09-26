import React from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const MobileSideBar = () => {
    function openMenu() {
        document.body.classList += " openMenu";
    }

    function closeMenu() {
        document.body.classList.remove("openMenu");
    }

  return (
    <>
      <MenuIcon className='menu__icon menu__icon--open' onClick={openMenu}/>
      <div className="menu__wrapper">
        <CloseIcon className='menu__icon menu__icon--close' onClick={closeMenu}/>
        <ul className="menu__list">
            <li className="menu__list--item">
                <Link 
                    className='menu__link' 
                    to="/" 
                    onClick={closeMenu}
                >
                    HOME
                </Link>
            </li>
            <li className="menu__list--item">
                <Link 
                    className='menu__link' 
                    to="/explore" 
                    onClick={closeMenu}
                >
                    EXPLORE
                </Link>
            </li>
        </ul>
      </div>
    </>
  )
}

export default MobileSideBar
