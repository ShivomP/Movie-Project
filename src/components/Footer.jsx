import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="row">
                <div className="footer__wrapper">
                    <h3 className='footer__title'>Kive Cinemas</h3>
                    <ul className="footer__list">
                        <li className="footer__list--item click">
                            <Link to="/" className='footer__link'>
                                HOME
                            </Link>
                        </li>
                        <li className="footer__list--item click">
                            <Link to="/explore" className='footer__link'>
                                EXPLORE
                            </Link>
                        </li>
                    </ul>
                    <p className='copyright'>Kive Cinemas Copyright © 2022</p>
                </div>
            </div>
        </div>   
    </footer>
  )
}

export default Footer
