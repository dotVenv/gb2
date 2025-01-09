import React from "react";
import { Chip, Spacer } from "@nextui-org/react";
const Footer = () => {

    return (
        <>
        <Spacer></Spacer>
            <footer className="footer-bg footer-p" style={{'background':' #1e191f'}}>
                <div className="footer-top pt-70">
                <div className="container">
                    <div className="row justify-content-between">
                        
                            <div className="col-xl-4 col-lg-4 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title mb-20">
                                    <img />
                                </div>
                                <div className="footer-link">
                                        Where Champions Play!
                                </div>
                                <div className="f-contact mt-20">
                                    <ul>
                                        <li>
                                        <i className="icon fal fa-map-marker-alt"></i>
                                            <span>Springfield, MO</span>
                                    </li>
                                    <li>
                                        <i className="icon far fa-clock"></i>
                                        <span>Phone : +1-(228)-400-4349 </span>
                                    </li>
                                    <li>
                                        <i className="icon dripicons-mail"></i>
                                            <span>Email : <a href="mailto:support@gamers-bounty.com">support@gamers-bounty.com</a></span>
                                    </li>
                                    
                                </ul>
                                    
                                    </div>
                                
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title">
                                    <h2>Our Links</h2>
                                </div>
                                <div className="footer-link">
                                    <ul>                                        
                                        <li><a href="/">Home</a></li>
                                        <li><a href="about"> About Us</a></li>
                                        <li><a href="games"> Games </a></li>
                                        <li><a href="contact"> Contact Us</a></li>
                                        <li><a href="blog">Blog </a></li>
                                
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title">
                                    <h2>Our Services</h2>
                                </div>
                                <div className="footer-link">
                                    <ul>
                                        <li><a href="faq">FAQ</a></li>
                                        <li><a href="contact">Support</a></li>
                                        <li><a href="privacypolicy">Privacy Policy</a></li>
                                        <li><a href="termsandconditions">Term & Conditions</a></li>
                                        <li><a href="refundpolicy">Refund Policy</a></li>
                                        <li><a href="https://gamersbountyinc.statuspage.io/">Status</a></li>
                                        <li><a href="about#crypto">What is GBCrypto?</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>  
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title">
                                    <h2>Stay Connected</h2>
                                </div>
                                <div className="footer-social  mt-30">                                    
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="https://www.instagram.com/gamersbounty_"><i className="fab fa-instagram"></i></a>
                                    <a href="https://discord.gg/v2x2H5Ct"><i className="fab fa-discord"></i></a>
                                    <a href="https://www.linkedin.com/company/gamers-bounty"><i className="fab fa-linkedin"></i></a>
                                </div>
                                
                            </div>
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title">
                                    <h2>Map</h2>
                                </div>
                                <div className="map-f">                                    
                                        <img />
                                </div>
                                
                            </div>
                        </div>  
                        
                        
                    </div>
                </div>
            </div>
            <div className="copyright-wrap">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">                         
                                Copyright © 2019-2025 Gamers-Bounty Inc. All Rights Reserved <br/> Gamers-Bounty or any child company of GB, are in no way endorsed by or affiliated with any company or parent company that events are played on. Any logos, or copyrighted information of these companies are soley their property.
                        </div>
                        <div className="col-lg-6 text-right text-xl-right">                       
                                    
                        </div>
                        
                    </div>
                </div>
            </div>
        </footer>


        </>
    );
};

export default Footer;