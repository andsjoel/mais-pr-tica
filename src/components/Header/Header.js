import React, { useState, useEffect } from 'react';
import "./header.css"
import img_condo from "../../assets/images/condominio_01.jpg"

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const isScrolled = window.scrollY > 0;
          setScrolled(isScrolled);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className='background-header'>
                <img className='bg_condominio' src={img_condo} />
            </div>
            <a className={`logo ${scrolled ? 'scrolled' : ''}`} href='#'>
                {/* <img id="logo" src={logo} alt="Logo da Mais Prática" /> */}
            </a>
            <nav>
                <ul>
                   <li><a href='#'>Home</a></li>
                   <li><a href='#'>Sobre a +Prática</a></li>
                   <li><a href='#'>Contato</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;