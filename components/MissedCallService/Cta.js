import React from 'react';
import Link from 'next/link';

const Cta = () => {
    return (
        <div className="iot-cta-area bg-0f054b">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="cta-iot-img">
                            <img 
                                src='/images/cta-shape2.png'
                                className="animate__animated animate__fadeInUp animate__delay-0.6s" 
                                alt="image" 
                            />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="cta-iot-content">
                            <p>Know more Missed Call Services, Call us +91-9871045375</p>

                            <Link href="/contact">
                                <a className="btn btn-primary">REQUEST FOR DEMO</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="circle-box">
                <img src='/images/circle.png' alt="image" />
            </div>
            <div className="cta-shape">
                <img src='/images/cta-shape.png' alt="image" />
            </div>
        </div>
    );
}

export default Cta;
