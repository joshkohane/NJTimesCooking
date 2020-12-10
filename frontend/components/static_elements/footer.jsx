import React from 'react'

const Footer = () => {
    return (
        <div className="home-footer" >
            <div className="about-us">
                <h1 className="footer-title">About us</h1>
                <p className="home-about-text" >NJT Cooking is a New Jersey themed clone of NYT Cooking from the New York Times. It provides any NJ based foods you could want and more.</p>
            </div>
            <div className="learn-more">
                <h1 className="footer-title" >Learn More</h1>
                <ul className="home-learn-text" >
                    <li className="footer-links" >GitHub Link</li>
                    <li className="footer-links" >Another Link</li>
                    <li className="footer-links" >Even One More Link</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;