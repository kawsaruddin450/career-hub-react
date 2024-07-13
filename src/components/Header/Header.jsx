import React from 'react';
import './Header.css';

const Header = ({children}) => {
    return (
        <header className='header py-32'>
            {children}
        </header>
    );
};

export default Header;