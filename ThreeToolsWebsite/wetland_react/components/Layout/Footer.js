import React from 'react'
import Link from 'next/link'

export default function Footer({className}) {
    // console.log(className);
    return (

        <footer className={`footer__area grey-bg-3 pt-270 p-relative ${className}`}>
            <div className="footer__shape">
                <img className="footer-circle-1" src="/img/icon/footer/home-1/circle-1.png" alt="" />
                <img className="footer-circle-2" src="/img/icon/footer/home-1/circle-2.png" alt="" />
            </div>
            <div className="footer__top pb-65">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="footer__widget mb-50">
                                <div className="footer__widget-title mb-25">
                                    <div className="footer__logo">
                                        <Link href="/"><a>
                                            <img src="/img/logo/logo-2.png" alt="logo" />
                                        </a></Link>
                                    </div>
                                </div>
                                <div className="footer__widget-content">
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay=".5s">
                            <div className="footer__widget mb-50 footer__pl-70">
                                <div className="footer__widget-title mb-25">
                                    <h3>Overview</h3>
                                </div>
                                <div className="footer__widget-content">
                                    <div className="footer__link">
                                        <ul>
                                            <li><Link href="/about"><a>About Us</a></Link></li>
                                            <li><Link href="/services"><a>Documentation</a></Link></li>
                                            <li><a href="/services/#troubleshooting">Troubleshooting</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-xxl-3 col-xl-2 col-lg-2 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay=".7s">
                            <div className="footer__widget mb-50 footer__pl-90">
                                <div className="footer__widget-title mb-25">
                                    <h3>Customer</h3>
                                </div>
                                <div className="footer__widget-content">
                                    <div className="footer__link">
                                        <ul>
                                            <li><Link href="#"><a>Home</a></Link></li>
                                            <li><Link href="#"><a>Product</a></Link></li>
                                            <li><Link href="#"><a>Pricing</a></Link></li>
                                            <li><Link href="#"><a>Integrations</a></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay=".8s">
                            <div className="footer__widget mb-50 footer__pl-30">
                                <div className="footer__widget-title mb-25">
                                    <h3>Product</h3>
                                </div>
                                <div className="footer__widget-content">
                                    <div className="footer__link">
                                        <ul>
                                            <li><Link href="/services-details"><a>Getting Started</a></Link></li>
                                            {/* <li><Link href="#"><a>Style Guide</a></Link></li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="1.1s">
                            <div className="footer__widget mb-50 float-md-end fix">
                                <div className="footer__widget-title mb-25">
                                    <h3>Follow Us</h3>
                                </div>
                                <div className="footer__widget-content">
                                    <div className="footer__social">
                                        <ul>
                                            <li><a href="https://github.com/oslabs-beta/BACE" target="_blank"><i className="fab fa-github"></i></a></li>
                                            <li><a href="https://www.linkedin.com/company/three-tools" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
                                            <li><a href="https://twitter.com/three_tools" target="_blank"><i className="fab fa-twitter"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="container">
                    <div className="footer__copyright">
                        <div className="row">
                            <div className="col-xxl-12 wow fadeInUp" data-wow-delay=".5s">
                                <div className="footer__copyright-wrapper text-center">
                                    <p>Copyright © 2022 All Rights Reserved by <Link href="https://github.com/oslabs-beta/BACE"><a>BACE</a></Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
