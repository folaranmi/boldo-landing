import React from 'react'
import HeroLanding from '../../organisms/hero-landing/HeroLanding'
import Feature1 from ".././../../assets/images/pngs/feature1.png";
import Feature2 from ".././../../assets/images/pngs/feature2.png";
import Feature3 from ".././../../assets/images/pngs/feature3.png";
import ConnectionImage1 from ".././../../assets/images/pngs/customer-connection1.png";
import ConnectionImage2 from ".././../../assets/images/pngs/customer-connection2.png";
// import ConnectionImage3 from ".././../../assets/images/pngs/customer-connection3.png";
import { FiArrowRight, FiCheck, FiFeather, FiSun, FiEye } from "react-icons/fi";
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <HeroLanding />

      <div className="container">

        {/* Our Services Section */}
        <div className="heading-box">
          <h6 className="title">Our Services</h6>
          <h2 className="heading">Handshake infographic mass market crowdfunding iteration.</h2>
        </div>


        {/* Features */}
        <div className="features">

          <div className="features__box">
            <div className="features__box--image">
              <img src={Feature1} alt="feature1" />
            </div>
            <div className="features__box--content">
              <div className="title">Cool feature title</div>
              <div className="text">Learning curve network effects return on investment.</div>
              <Link to="/" className="link">Explore page <FiArrowRight size="2.4rem" className='icon' /></Link>
            </div>
          </div>

          <div className="features__box">
            <div className="features__box--image">
              <img src={Feature2} alt="feature1" />
            </div>
            <div className="features__box--content">
              <div className="title">Even cooler feature</div>
              <div className="text">Learning curve network effects return on investment.</div>
              <Link to="/" className="link">Explore page <FiArrowRight size="2.4rem" className='icon' /></Link>
            </div>
          </div>

          <div className="features__box">
            <div className="features__box--image">
              <img src={Feature3} alt="feature1" />
            </div>
            <div className="features__box--content">
              <div className="title">Cool feature title</div>
              <div className="text">Learning curve network effects return on investment.</div>
              <Link to="/" className="link">Explore page <FiArrowRight size="2.4rem" className='icon' /></Link>
            </div>
          </div>

        </div>


        {/* Customer Connect Section 1 */}
        <div className="connectbox">
          <div className="image__content">
            <img src={ConnectionImage1} alt="customer conection" />
          </div>
          <div className="text__content">
            <h1 className='heading'>We connect our customers with the best, and help them keep up-and stay open.</h1>

            <div className="listbox-one">
              <div className='check'><FiCheck size="" className='icon' /></div>
              <span className='check-text'>We connect our customers with the best.</span>
            </div>

            <div className="listbox-one">
              <div className='check'><FiCheck size="" className='icon' /></div>
              <span className='check-text'>Advisor success customer launch party.</span>
            </div>

            <div className="listbox-one">
              <div className='check'><FiCheck size="" className='icon' /></div>
              <span className='check-text'>Advisor success customer launch party.</span>
            </div>

            <div className='cta'>
              <button className='btn btn-primary-large'> Start now</button>
            </div>
          </div>
        </div>

        {/* Customer Connect Section 2 */}
        <div className="connectbox">

          <div className="text__content">
            <h1 className='heading'>We connect our customers with the best, and help them keep up-and stay open.</h1>

            <div className="listbox-two">
              <div className='check'><FiFeather size="" className='icon' /></div>
              <span className='check-text'>We connect our customers with the best.</span>
            </div>

            <div className="listbox-two">
              <div className='check'><FiSun size="" className='icon' /></div>
              <span className='check-text'>Advisor success customer launch party.</span>
            </div>

            <div className="listbox-two">
              <div className='check'><FiEye size="" className='icon' /></div>
              <span className='check-text'>Advisor success customer launch party.</span>
            </div>
          </div>

          <div className="image__content">
            <img src={ConnectionImage2} alt="customer conection" />
          </div>

        </div>

      </div>

    </div>
  )
}

export default HomePage