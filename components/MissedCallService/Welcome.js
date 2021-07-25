import React from 'react';
import Link from 'next/link';

 const Welcome = () => {
     return(
        <>
            <div className="services-area bg-f7fafd ptb-80">
            <div className="row">      
                        <div className="col-lg-6 text-center">   
                     
                            <h2 className ="py-1">Welcome To Techmet</h2>
                        </div>
                    <div className="col-6">
                            <div className="row py-2 ">
                                <div className="btn-group">
                                   <div className="col-1"></div>
                                    <div className="col-2">
                                       <Link href="/contact">
                                            <a className="btn btn-primary">Pricing</a>
                                       </Link>
                                    </div>
                                    <div className="col-1"></div>
                                    <div className="col-2">
                                       <Link href="/contact">
                                            <a className="btn btn-primary">FAQ</a>
                                       </Link>
                                    </div>
                                    <div className="col-1"></div>
                                    <div className="col-2">
                                       <Link href="/contact">
                                            <a className="btn btn-primary">LOGIN</a>
                                       </Link>
                                    </div>
                                    <div className="col-1"></div>
                                    <div className="col-2">
                                       <Link href="/contact">
                                            <a className="btn btn-danger">FreeTrial</a>
                                       </Link>
                                    </div>
                                </div>                         
                            </div>
                        </div>
                    </div>
                <div className="container pb-80">
                    <h4 className= "text-center">Missed Call Number for your Business</h4>
                    <br />
                    <p>Your customer can placed a missed call to your given number at zero cost and receive a call back immediately. Missed Call Service is easiest way to give your customer updates, Lead Generation, Free Callback to caller, Customer Engagement, Customer Support, Customer Feedback, Application Download, Opinion Poll, OTP/Mobile Number Verification.</p>
                    <p><strong>Lead Generation :</strong> This is an effective and low cost method to generate more leads. Also create awareness and interest among people about your business.</p>
                    <p><strong>Customer Engagement :</strong> Missed Call can be followed  by a variety of actions – another call, text message etc.</p>
                    <p><strong>Customer Verification :</strong> Missed call alert is a better alternative to OTPs for customer verification. Ask them to verify their phone number by giving a missed to a mobile number.</p>
                    <p><strong>Conduct Polls, Collect Feedback :</strong> Before you launch new products and services use missed call solution to conduct research and survey polls about consumer opinion and needs</p>   
                </div>
            </div>
        </>
     )
 }

export default Welcome;