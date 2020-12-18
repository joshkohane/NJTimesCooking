import React from 'react'

const Footer = () => {
    return (
        <div className="main-footer-container">
            <div className="above-footer">
                <div className="about-us">
                    <h1 className="above-footer-title" >Get Our Newsletter</h1>
                    <p className="above-footer-text" >For more recipes and information, keep coming back for updates.</p>
                </div>
                <div className="learn-more">
                    <h1 className="footer-title" >Follow us</h1>
                    <ul className="home-icon-text" >
                        <a target="_blank" href="https://github.com/joshkohane/NJTimesCooking" className="footer-icon">
                            <div className="footer-inner-icon">
                                <i className="fab fa-github links-icons-git"></i>
                            </div>
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/josh-kohane-1472981b4" className="footer-icon">
                            <div className="footer-inner-icon">
                                <i className="fab fa-linkedin links-icons-linked"></i>
                            </div>
                        </a>
                    </ul>
                </div>
            </div>
            <div className="home-footer" >
                <div className="about-us">
                    <h1 className="footer-title">About us</h1>
                    <p className="home-about-text" >NJT Cooking is a New Jersey themed clone of NYT Cooking from the New York Times. It provides any NJ based foods you could want and more. This site was created by Josh Kohane, a software developer based in New Jersey. Recipes lovingly borrowed from the real NYTimes Cooking.</p>
                </div>
                <div className="learn-more">
                    <h1 className="footer-title" >Learn More</h1>
                    <ul className="home-learn-text" >
                        <a target="_blank" href="https://cooking.nytimes.com/" className="footer-links" >Original recipes</a>
                        <a target="_blank" href="https://www.bonappetit.com/" className="footer-links" >Additional recipes</a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;