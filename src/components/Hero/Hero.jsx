import React from 'react'
import './_Hero.scss';
const Hero = () => {
    return (
        <>
            <section className="hero">
                <div className="hero__tagline">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <button className="btn">HIRE NOW</button>
                <img src="../assets/images/PEMF-Mat.jpg" alt="Pemf Mat"/>
                <span className="stroke1"></span>
            </section>
        </>
    )
}

export default Hero
