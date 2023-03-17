import React from 'react'
import Accent from "../../../assets/images/pngs/accent2.png";
import Buttons from '../../atoms/buttons/Buttons';
import InputField from '../../atoms/inputs/InputField';

function FooterCTA() {
  return (
    <div className='container'>
        <div className="footer-card">
            <img src={Accent} alt="accent bg" className='accent' />

            <p className='heading'>An enterprise template to ramp up your company website</p>
            <div className="ctabox">
                <InputField type="text" name='email' placeholder="Your email address" />
                <Buttons classname="btn btn-primary-green-large" label="Start now" />
            </div>
        </div>
    </div>
  )
}

export default FooterCTA