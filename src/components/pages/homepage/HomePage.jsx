import React from 'react'
import HeroLanding from '../../organisms/hero-landing/HeroLanding'
import Feature1 from ".././../../assets/images/pngs/feature1.png";
import Feature2 from ".././../../assets/images/pngs/feature2.png";
import Feature3 from ".././../../assets/images/pngs/feature3.png";
import ConnectionImage1 from ".././../../assets/images/pngs/customer-connection1.png";
import ConnectionImage2 from ".././../../assets/images/pngs/customer-connection2.png";
import IncomeBarChart from ".././../../assets/images/pngs/income-chart.png";
import PieChart from ".././../../assets/images/pngs/pie-chart.png";
import User1 from ".././../../assets/images/pngs/user1.png";
import User2 from ".././../../assets/images/pngs/user2.png";
import User3 from ".././../../assets/images/pngs/user3.png";

// import ConnectionImage3 from ".././../../assets/images/pngs/customer-connection3.png";
import { FiArrowRight, FiCheck, FiFeather, FiSun, FiEye, FiArrowLeft } from "react-icons/fi";
import { Link } from 'react-router-dom';

function HomePage() {

  const testimonials = [
    {
      quote: "Buyer buzz partner network disruptive non-disclosure agreement business",
      userImage: User1,
      name: "Albus Dumbledore",
      position: "Manager @ Howarts",
    },
    {
      quote: "Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.",
      userImage: User2,
      name: "Severus Snape",
      position: "Manager @ Slytherin",
    },
    {
      quote: "Release facebook responsive web design business model canvas seed money monetization.",
      userImage: User3,
      name: "Harry Potter",
      position: "Team Leader @ Gryffindor",
    },
    {
      quote: "Buyer buzz partner network disruptive non-disclosure agreement business",
      userImage: User1,
      name: "Albus Dumbledore",
      position: "Manager @ Howarts",
    },
    {
      quote: "Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.",
      userImage: User2,
      name: "Severus Snape",
      position: "Manager @ Slytherin",
    },
    {
      quote: "Release facebook responsive web design business model canvas seed money monetization.",
      userImage: User3,
      name: "Harry Potter",
      position: "Team Leader @ Gryffindor",
    },
  ]
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


        {/* Customer Connection Section 1 */}
        <div className="connectbox">

          <div className="image__content">
            <div className="image__content--wrapper">
              <img src={ConnectionImage1} alt="customer conection" className='theimage' />
              <div className="databox first">
                <img src={IncomeBarChart} alt="income chart" className='chart' />
                <h6 className='percentage'>30%</h6>
                <span className='metrics'>More income in June</span>
              </div>
            </div>
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
              <span className='check-text'>Business-to-consumer long tail.</span>
            </div>

            <div className='cta'>
              <button className='btn btn-primary-large'> Start now</button>
            </div>
          </div>
        </div>

        {/* Customer Connection Section 2 */}
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
              <span className='check-text'>Business-to-consumer long tail.</span>
            </div>
          </div>

          <div className="image__content">

            <div className="image__content--wrapper">
              <img src={ConnectionImage2} alt="customer conection" />
              <div className="databox second">
                <img src={PieChart} alt="income chart" className='chart' />
                <ul className='metricsbox'>
                  <li className='item blue'>35% -  Agile Development</li>
                  <li className='item green'>30% -  Investor bandwidth</li>
                  <li className='item grey'>35% -  A/B testing</li>
                </ul>

              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Testimonials */}
      <div className="testimonials">
        <div className="container">

          <div className="testimonials__header">
            <h1 className='heading'>An enterprise template to ramp up your company website</h1>
            <div className="slider-control">
              <div className="control"><FiArrowLeft className='icon' /></div>
              <div className="control"><FiArrowRight className='icon' /></div>
            </div>
          </div>

          <div className="testimonials__slider">

            {testimonials.map((user) => (
              <div className="testimonials__slider--box">

                <q className='quote'>{user.quote}</q>
                <div className="userbox">

                  <div className="user-image">
                    <img src={user.userImage} alt="user" className='image' />
                  </div>

                  <div className="user-details">
                    <p className="name">{user.name}</p>
                    <span className="position">{user.position}</span>
                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </div>

    </div>
  )
}

export default HomePage