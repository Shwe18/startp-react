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
            <div className="container ptb-80">
                    <div className="row justify-content-center align-items-center">
                        <h2 className="text-center ">Tollfree number with IVR for your Business</h2><br />
                        <p>
                            There’s no better way to connect with your callers 24X7 with your toll free number with IVR functionality. It also adds credibility to your business wherein caller not get charged to connect with you.
                        </p>
                        <h5>
                            *    Free for Callers <br />
                            *    Improve the quality of Leads<br />
                            *    Sounds more Professional <br />                                                        
                            *    Increasae your Business Enquiry<br />                       
                        </h5>
                        <p>
                            In India a Toll Free number generally starts with 1800 followed by the operator code (The licensed telecom service provider and usually consists of three digits), which is followed by three to four digits issued by the Telecom operator to their clients.
                        </p>
                        <p>
                                A Toll Free number lets the caller make the call free of cost and connect with the called party (i.e. the business). The caller does not pay the bill for the call unlike the normal person-to-person calls where the calling person is charged as per their billing plan.
                            </p>
                            <p>
                                Toll Free number is a free number for the caller who makes the call. Toll free numbers are easy to understand, flexible in their functioning and beneficial to both the business and its customers. Simple, isn’t it?
                            </p>
                    </div>
                </div>    


        </>
    )
}

export default Welcome;