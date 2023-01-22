import React from 'react'
import './Footer.css'
import { FiInstagram } from 'react-icons/fi';
import { FaFacebook } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate()
    return (


        <div className='footer'>
            <footer>
                <div className="footer__container">
                    <h1>Matrix Game</h1>
                    <div className="footer__row">

                        <div className="footer__col">
                            <h4>QUICK LINKS</h4>
                            <ul>
                                <li>Home</li>
                                <li>About Us</li>
                                <li>My Transations</li>
                                <li>Contact us</li>

                            </ul>
                        </div>

                        <div className="footer__col">
                            <h4>GET HELP</h4>
                            <ul>
                                <li>FAQ</li>

                                <li>Contact us</li>

                            </ul>
                        </div>

                        <div className="footer__col">
                            <h4>Contact Informations</h4>
                            <ul>
                                <li>E-mail: marix@gmail.com</li>
                            </ul>
                            <br />
                            <div className='social__links'>
                                <a href="#" target='_blank' className='fa'><FaFacebook /></a>
                                <a href="#" target='_blank' className='ig'><FiInstagram /></a>

                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer