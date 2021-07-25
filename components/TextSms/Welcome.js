import React from 'react';
import Link from 'next/Link';

const Welcome = () => {
     return(
        <>
            <div className="services-area ptb-80 bg-f7fafd">
                <div className="container">
                <div className="row">      
                        <div className="col-lg-6">   
                     
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
                    <h4 className="text-center"><strong>Communicate about yourself in Single Click (SMS)</strong></h4>
                        <br />
                        <p>SMS is useful for all types of businesses, especially in targeting the local customers. With the help of SMS you can communicate your existing customer or increase your sale by 200% in just a couple of days. SMS Marketing service is excellent for promoting as well as in communicating with the customers and conveying a brand message or to develop strong brand awareness among the mass.</p>
                        <br />
                        <p>Businesses around the world have been using SMS’s for promoting their products and services, bringing in new customers through several campaigns and keeping in touch with their current customer base. With the help of SMS you can communicate regularly with your existing customers or increase your sales by 200% in just a couple of days.</p>
                        <br />
                        <p>SMS Marketing service is excellent for promoting as well as in communicating with the customers and conveying a brand message or to develop strong brand awareness among the mass. Use SMS mobile marketing to add to and enhance your overall outbound strategy and campaign management.</p>
                </div>
            </div>
        </>
     )
 }

export default Welcome;