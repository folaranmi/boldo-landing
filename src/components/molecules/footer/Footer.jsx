import React from 'react'
import { Link } from 'react-router-dom';
import Logo from "../../../assets/images/svg/boldo-logo-dark.svg";

function Footer() {
    return (
        <div className='footer-con'>
            <div className="container">
                <div className="footer">
                    <div className="footer__box one">
                        <img src={Logo} alt="logo dark version" />
                        <p className="text">
                            Social media validation business model canvas graphical user
                            interface launch party creative facebook iPad twitter.
                        </p>

                        <span className='copyright'>All rights reserved.</span>
                    </div>
                    <div className="footer__box">
                        <h3 className="title">Landings</h3>
                        <ul className='linkbox'>
                            <li className='footer__link'><Link>Home</Link> </li>
                            <li className='footer__link'><Link>Products</Link> </li>
                            <li className='footer__link'><Link>Services</Link> </li>
                        </ul>
                    </div>
                    <div className="footer__box">
                        <h3 className="title">Company</h3>
                        <ul className='linkbox'>
                            <li className='footer__link'><Link>Home</Link> </li>
                            <li className='footer__link'><Link>Careers </Link> <span className='badge'>Hiring!</span></li>
                            <li className='footer__link'><Link>Services</Link> </li>
                        </ul>
                    </div>
                    <div className="footer__box">
                        <h3 className="title">Resources</h3>
                        <ul className='linkbox'>
                            <li className='footer__link'><Link>Blog</Link> </li>
                            <li className='footer__link'><Link>Products</Link> </li>
                            <li className='footer__link'><Link>Services</Link> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer