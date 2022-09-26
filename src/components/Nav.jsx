import React from 'react';
import Logo from '../assets/logo.png';
import {Link} from 'react-router-dom';

const Nav = () => {
    return(
        <nav>
            <div className="container">
                <div className="row">

                    <div className='nav--wrapper'>
                        <Link to="/" className='nav__img--wrapper'>
                            <img className="nav__img" src={Logo} alt="logo"/>
                        </Link>
                        <ul className='nav__list'>
                            <li className='nav__list--item click'>
                                <Link 
                                    className="nav__link" 
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className='nav__list--item click'>
                                <Link 
                                    className="nav__link" 
                                    to="/explore"
                                >
                                    Explore
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;