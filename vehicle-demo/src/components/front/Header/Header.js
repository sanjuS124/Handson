import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { FaHeart } from 'react-icons/fa';

const Header = () => {
    return (
            <header className='header'>
                <div>
                <h1>
                    <Link to="/" className='logo'>
                        Vehicle Showroom
                    </Link>
                </h1>
                </div><div className="header-links">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/signin">SignIn</Link>
                    </li>
                </ul>

                <ul>
                    <li>
                        <Link to="/cart">
                        <FaHeart/>
                        </Link>
                    </li>
                </ul>

                
                
            </div>
            </header>
    );
};

export default Header;





