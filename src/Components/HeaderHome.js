import React from 'react';
import Image from './assets/logo.png';
import { Link } from 'react-router-dom';

function HeaderHome() {
  return (
      <>
        <div className="header">
            <div className="logo">
            <img src={Image} alt="University Logo" />
            </div>
            <div className="navigation">
            <Link to="/" className='button'>Home</Link>
            <Link to="/login" className='button'>Login</Link>
            </div>
        </div>
      </>
  )
}

export default HeaderHome;