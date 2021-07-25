import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

const WhyWeAreBest = () => {
    return (
        <div className="Features">
        <div className="iot-why-choose-us ptb-80">
            <div className="container">
                <div className="section-title">
                    <h2>Features</h2>
                </div>
                
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-3">
                        <div className="single-iot-box">
                            <div className="icon">
                                <img src='/images/icon1.png' alt="image" />
                            </div>
                            <h3>Professional Image</h3>

                            <ul>
								* Call disconnected after ring<br />
								* Thankyou SMS to caller<br />
								<br />
								
							</ul>               

                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3">
                        <div className="single-iot-box">
                            <div className="icon">
                                <img src='/images/icon2.png' alt="image" />
                            </div>
                            <h3>Beneficial Usage</h3>
                            <ul>
								* OTP/ Mobile Verification<br />
							    * Application Download<br />
								* Opinion Poll<br />
								* Customer Engagaement<br />
								
							</ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3">
                        <div className="single-iot-box">
                            <div className="icon">
                                <img src='/images/icon3.png' alt="image" />
                            </div>
                            <h3>24/7 Multiple Connectivity</h3>
                            <ul>
								* Always Connected,<br />
							    * Multiple Call Connected on Single Number,<br />
								
							</ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3">
                        <div className="single-iot-box">
                            <div className="icon">
                                <img src='/images/icon1.png' alt="image" />
                            </div>
                            <h3>Simple Online Panel</h3>
                            <ul>
								* Easy Manageable<br />
								* Real-time analysis<br />
								* Call Logs<br />
								<br />
							</ul>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>

        <div className="container ptb-80">
                        
        <h2>How Missed Call Service Actually Works</h2>
        <div className="bar"></div>
        <p>
            Your advertised number on diffenet medium sources (9810 XXX XXX) like Digital Media, Radio & TV, Publishing-Broucher, Pumplets, holdings etc. Or Product <strong>(Anyone who gives a missed call to a number, call will be get disconnect after a ring)</strong>
        </p>

        <p><strong>Each Missed Call is logged in System</strong></p>
        <p><strong>Interact with Customer as per Business Process</strong></p>
        <p><strong>Automize your Feedback/Support Or Verification </strong></p>

        <p>And post call completed, System will automatically send sms on caller number with your customer sender ID, <strong>Example :  Pay TM, Tata Sky, ID-Idea, VM-ICICIB)</strong></p>
        <p>You can also set Auto Thank you SMS, give updates or interact with customer for which purpose you asked to give missed call</p>
        </div>
        </div>
    );
}

export default WhyWeAreBest;
