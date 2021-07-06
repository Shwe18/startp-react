import React from 'react';
import Link from 'next/link';

const CTA = () => {
    return (
        <div className="cta-area ptb-80">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-6">
                        <div className="cta-content">
                            <h3>Know more about IVR Solutions, Call on +91-9871045375</h3>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-6">
                        <div className="cta-right-content">
                            

                            <div className="buy-btn">
                                <Link href="/contact">
                                    <a className="btn btn-primary">REQUEST FOR DEMO</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CTA;
