import React from 'react';
import Link from 'next/link';

const CTAStyleTwo = () => {
    return (
        <div className="agency-cta-area ptb-80">
            <div className="container">
                <div className="agency-cta-content">
                    <h2>Want to know more about products, Call us +91-9871045375</h2>

                    <Link href="/contact">
                        <a className="btn btn-gradient">REQUEST FOR DEMO</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CTAStyleTwo;  