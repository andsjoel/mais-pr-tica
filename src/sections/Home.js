import React, { useState, useEffect } from 'react';
import Header from "../components/Header/Header";
// import bg_casa from  "../assets/images/predios_0.jpg"
import "../Home.css"

const Home = () => {
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
        <>
            <Header />
            <section className={`home ${scrolled ? 'scrolled' : ''}`}>
                {/* <img className="bg_casa" src={ bg_casa } /> */}
                <div>
                    <p className='frase'>Modernidade e Eficiência: Transformando Condomínios com <span>Mais Prática</span>!</p>
                </div>
            </section>
        </>
    );
}

export default Home;