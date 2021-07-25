import React from 'react';
import Link from 'next/link'

 const Welcome = () => {
     return(
        <>
         <div className="container fluid">
                <div className="content">
                    <div className="row">      
                        <div className="col-lg-6">   
                            <h1 className ="py-3 text-success">Welcome To Techmet</h1>
                        </div>
                      
                       
                    <div className="col-6">
                      <div className="col-1 "></div>
                         <div className="row py-2 ">
                             <div class="btn-group">
                                   
                                   <div className="col-2">
                                       <Link href="/contact">
                                         <a className="btn btn-primary">Pricing</a>
                                       </Link>
                                   </div>

                                   <div className="col-1"></div>
                                   <div className="col-2">
                                       <Link href="/contact">
                                         <a className="btn btn-primary px-5">FAQ</a>
                                       </Link>
                                   </div>

                                       <div className="col-1"></div>
                                   <div className="col-2">
                                       <Link href="/contact">
                                         <a className="btn btn-primary px-5">Login</a>
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
                </div>
            </div>
            <div className="services-area  bg-f7fafd">
                <div className="container ptb-80">
                    <h4 className="text-center">Make your operations more transparent & increase your business…</h4>
                    <p>LMS is stands for Lead Management Software. This technology helps you to manage your employee performance and analyse the ROI of leads sources with customised workflow.</p>
                
                    <h5 ><strong>Introducing BeTyphon – The best Lead Management Solution for Your Business Growth</strong></h5>
                    <p>Complete all sales activities, see detailed company and contact records and view communication history all in one place so that you can manage leads without the hassle or wasted efforts. Betyphon’s helps you to manage and follow up all leads in one place. It lets you assign different prospects to different agent and track them in one place.</p>
                    <p>You can personalize your customer outreach without searching for details. Organise and score leads as they are captured. Leads can be organized in multiple ways – by geography, by the media channel they are sourced from, their behavioural traits and more. Without a flexible lead management system, it can be challenging to coordinate distribution, follow up and management schedule.</p>
                    <br />

                    <h5><strong>BeTyphon is easy to use, flexible to suit your specific needs –</strong></h5>
                        <ul className="py-2">
                        * Easy and straightforward manner to manage individual leads. Track the performance all automated when and how you like.<br />
                        * Make your operations more transparent & increase your business<br />
                        * BeTyphon Lead Management technology helps you to manage your employee performance and analyse the ROI of leads sources with customised workflow.<br />
                        * Betyphon works as SAAS which allows you to access from anywhere on Computer, Tablet or Mobile.<br />
                        * Betyphon mobile app allows the call recording, auto dialing, GPS tracking, Picture upload & much more<br />
                        <p className="py-2">In today’s fast moving business times, the probability that you are not up-to-date with new technologies is shrinking the growth of your business. Every company, big or small, any industry, needs a constant flow of happy customers and clients. Organizations generate leads through various online & offline marketing initiatives with the aim of converting these leads into customers. Majority of the companies use hardcopy or excel sheets to maintain details of these leads. Any follow-ups done, conversions made or even discarded leads are still managed on paper or time consuming excel sheets.</p>
                        <p>No matter which industry your company belongs to, your pain-areas following the old processes i.e. creating manual reports, no timely & systematic follow ups will cause leakage in business and costly business operations. These methods cause loss of correct information on conversions, loss of time and money</p>
                        <p>You spend money and resources on marketing efforts to generate leads, what happens to it? Well most marketing leads are never pursued. In fact, it’s estimated that 80% of leads generated through marketing get lost, discarded or ignored. That’s a lot of lost revenue.  Also most leads don’t convert on the first impression, which means they need to be nurtured over time. So Betyphon is solution for you</p>
                        </ul>

                    <p>In today’s fast moving business times, the probability that you are not up-to-date with new technologies is shrinking the growth of your business. Every company, big or small, any industry, needs a constant flow of happy customers and clients. Organizations generate leads through various online & offline marketing initiatives with the aim of converting these leads into customers. Majority of the companies use hardcopy or excel sheets to maintain details of these leads. Any follow-ups done, conversions made or even discarded leads are still managed on paper or time consuming excel sheets.</p>
                    <br />
                    <p>No matter which industry your company belongs to, your pain-areas following the old processes i.e. creating manual reports, no timely & systematic follow ups will cause leakage in business and costly business operations. These methods cause loss of correct information on conversions, loss of time and money</p>
                    <br />
                    <p>You spend money and resources on marketing efforts to generate leads, what happens to it? Well most marketing leads are never pursued. In fact, it’s estimated that 80% of leads generated through marketing get lost, discarded or ignored. That’s a lot of lost revenue.  Also most leads don’t convert on the first impression, which means they need to be nurtured over time. So Betyphon is solution for you</p> 
                </div>
            </div>
        </>
     )
 }

export default Welcome;