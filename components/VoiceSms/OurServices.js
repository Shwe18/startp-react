import React from 'react';
import Link from 'next/link';

const OurServices = () => {
    return (
        <div className="ml-services-area ptb-80">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Our Solutions</span>
                    <h2>How the Voice-SMS Services Actually Works</h2>
                    <div className="bar"></div>
                </div>

                <div className="row justify-content-center">
                    <p>You can send pre-recorded call to anyone on their mobile Or Landline phone, who pickup the call will listen your Message <strong>(We are sharing the details on behalf of XYZ Company).</strong> During the call receiver can press DTMF for response, if needed.</p>
                    <br />
                    <p>Some of benefits :</p>
                    <br />
                    <div className="px-5">
                        <p><strong>Lead Generation :</strong> Voice broadcasting grow probability to reach wide market and generate potential leads thru DTMF.</p>
                        <p><strong>Promotions :</strong> Communication thru phone call is more effective and high responsive output for any Brand.</p>
                        <p><strong>Pay Per Usage : </strong>Only answered calls are billed to your account. Using our detailed delivery reports, you can see the status of all the calls made.</p>
                        <p><strong>Communication : </strong>Now days acknowledgement / Communication thru Voice SMS is similar to text SMS.</p>
                        <p><strong>Highly Scalable : </strong>Due to cloud infrastructure, able to increase capacity anytime.</p>
                        <p><strong>Real Time Detailed Report : </strong>Report of each number get updated after the call is completed. You can track the progress of your voice calls campaign in real time. </p>
                    </div>
                    <br />
                    <p>And post call completed, System will automatically send sms on call receiver number with your customer sender ID, <strong> Example :  Pay TM, Tata Sky, ID-Idea, VM-ICICIB)</strong></p>
                </div>
            </div>

            {/* Shape Images */}
            <div className="shape1">
                <img src="/images/shape1.png" alt="shape" />
            </div>
            <div className="shape2 rotateme">
                <img src="/images/shape2.svg" alt="shape" />
            </div>
            <div className="shape3">
                <img src="/images/shape3.svg" alt="shape" />
            </div>
            <div className="shape4">
                <img src="/images/shape4.svg" alt="shape" />
            </div>
            <div className="shape7">
                <img src="/images/shape4.svg" alt="shape" />
            </div>
            <div className="shape8 rotateme">
                <img src="/images/shape2.svg" alt="shape" />
            </div>
        </div>
    );
}

export default OurServices;