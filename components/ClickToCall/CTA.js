import React from 'react';
import Link from 'next/link';

const CTA = () => {
    return (
        <div className="cta-area ptb-80">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-9 col-md-6">
                        <div className="cta-content">
                            <h5>Know more about Click to Call Solutions, Call on +91-9871045375</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
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
