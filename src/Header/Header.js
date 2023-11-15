import React from 'react';
import './Header.css';
import pretzel from '../pretzel.svg';

function Header() {
    return (
        <header>
            <img fill='#fff' src={pretzel} alt='Pretzel Icon'/>
            <p className='credit'><a href="https://www.svgrepo.com/svg/132494/big-pretzel">Big Pretzel SVG</a></p>
        </header>
    )
}

export default Header;