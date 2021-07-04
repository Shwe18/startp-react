import React from 'react';
import Link from 'next/link';

const FunFactsArea = () => {
    return (
        <div className="funfacts-area ptb-80">
            <div className="container">
                <div className="section-title">
                    <h2>Our Vision</h2>
                    <div className="bar"></div>
                    <p>To consistently provide scalable & robust IT/Software services through different technology platforms as per the customer requirement in diverse horizontal and vertical segments.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-4 col-8">
                        <div className="funfact">
                            <h3>20+</h3>
                            <p>Industries</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-8">
                        <div className="funfact">
                            <h3>99.99% Uptime</h3>
                            <p>Handled Successfully</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-8">
                        <div className="funfact">
                            <h3>10+</h3>
                            <p>Products</p>
                        </div>
                    </div>
                </div>

                <div className="row ptb-80">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="funfact">
                            <h3>5000+</h3>
                            <p>Customers</p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="funfact">
                            <h3>9000+</h3>
                            <p>Cup of Coffees</p>
                        </div>
                    </div>
                </div>

                <div className="contact-cta-box">
                    <h3>Have any question about us?</h3>
                    <p>Don't hesitate to contact us</p>

                    <Link href="/contact">
                        <a className="btn btn-primary">Contact Us</a>
                    </Link>
                </div>

                <div className="map-bg">
                    <img src="/images/map.png" alt="map" />
                </div>
            </div>
        </div>
    )
}

export default FunFactsArea;