import React from 'react'
import Footer from '../../molecules/footer/Footer'
import Navigation from '../../molecules/navigation/Navigation'

function LandingLayout({ children, pageTitle }) {
    return (
        <div>
            <div className="custom-header">
                <div className="container">
                    <Navigation />

                    {pageTitle && <h1 className='title'>{pageTitle}</h1>}
                </div>
            </div>
            <div className="custom__content">
                {children}
            </div>

            <Footer />
        </div>
    )
}

export default LandingLayout