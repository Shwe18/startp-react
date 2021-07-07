import React from 'react';
import Link from 'next/link';

const CTAStyleTwo = () => {
    return (
        <div className="service-area ptb-80 px-4 container">
            <div className="Container" >
                <div className ="row agency-cta-area" >
                    <div className ="col-8 px-4 py-5">
                        <h4 class="text-center">Know more about Tollfree Service, Call on +91-9871045375</h4>
                    </div>

                    <div className = "col-4 py-5 px-5 ">
                        <button className="btn btn-primary " type="/contact">Request for demo</button>
                    </div>       
                </div>
            </div> 
        </div>
    );
}

export default CTAStyleTwo;