import React from 'react'
import HeroAccent from "../../../assets/images/pngs/accent1.png"
import HeroGraphics from "../../../assets/images/pngs/hero-image.png"
import Buttons from '../../atoms/buttons/Buttons'
import Navigation from '../../molecules/navigation/Navigation'
import LogoSlider1 from "../../../assets/images/svg/logo-slider1.svg"
import LogoSlider2 from "../../../assets/images/svg/logo-slider2.svg"

function HeroLanding() {
    const sliderImages = [
        { src: LogoSlider1, alt: "slider1" },
        { src: LogoSlider2, alt: "slider2" },
        { src: LogoSlider1, alt: "slider1" },
        { src: LogoSlider2, alt: "slider2" },
        { src: LogoSlider1, alt: "slider1" },
        { src: LogoSlider2, alt: "slider2" },
        { src: LogoSlider1, alt: "slider1" },
        { src: LogoSlider2, alt: "slider2" },
    ];

    return (
        <div className='hero-container'>
            <img src={HeroAccent} alt="hero accent" className='side-accent' />

            <div className="container">
                <Navigation />

                {/* Hero text and images */}

                <div className="hero-content">
                    <div className="textcon">
                        <h2 className='heading'>Save time by building  fast with Boldo Template </h2>
                        <p className='sub-heading'>
                            Funding handshake buyer business-to-business metrics iPad partnership.
                            First mover advantage innovator success deployment non-disclosure.
                        </p>
                        <div className="cta-box">
                            <Buttons classname="btn btn-primary-green-large" label="Buy template" />
                            <Buttons classname="btn btn-secondary-white-large" label="Explore" />
                        </div>
                    </div>
                    <div className="imagecon">
                        <img src={HeroGraphics} alt="hero graphics" />
                    </div>
                </div>

                {/* Hero Logo Slider */}
                <div className="logo-slider">
                    {sliderImages.map((image, index) => (
                        <img src={image.src} alt={image.alt} key={index} />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default HeroLanding