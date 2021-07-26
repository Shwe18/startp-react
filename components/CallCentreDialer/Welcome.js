import React from 'react';
import Link from 'next/link'


const Welcome = () => {
    return (
        <>

            <div className="container fluid ">
                <div className="content">
                    <div className="row">      
                        <div className="col-lg-6">                        
                            <h1 className ="py-3 text-success">Welcome To Techmet</h1>                               
                        </div>                     
                       
                    <div className="col-6">
                      <div className="col-1 "></div>
                         <div className="row py-2 ">
                                <div className="btn-group">   
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
            <div className="container">
                <div className="col-lg-6 pb-80">
                    <div className="row text-left">
                        <h3><strong>Manage your calls with Call Centre Solution</strong></h3>
                        <p>Techmet understand the dynamics of your customer and keep them engaged till life-cycle. 
                            You can manage them using <strong>call Centre solutions</strong> and reduce the operating cost. 
                            <strong>Auto dialer</strong> removes non-connectivity with agent because it connects with agent when customer get connected. 
                            We offers customer detailed report and integration to a number of third party application. 
                            A type of call Centre that is designed to make & receive a large volume of calls for customer by telephone and its easy to scale as per requirement.  
                            In Call Centre, communication happens for Sales, Subscription management, technical support, product request, billing and different enquiry from customer. 
                            <strong> Hosted dialer solution</strong> gives the premisis base control on <strong>call centre solution</strong>
                        </p>    
                    </div>
                </div>
            </div>    
        </>
    )
}

export default Welcome;