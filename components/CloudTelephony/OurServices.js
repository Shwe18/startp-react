import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

const OurServices = () => {
    return (
        <div className="agency-services-area pt-80 pb-50">
            <div className="container">

                <div className="content">
                    <div className="row">      
                        <div className="col-lg-6">   
                     
                            <h1 className ="py-3">Welcome To Techmet</h1>
                            <h3>Cloud Telephony Solution will helps you to manage Communication with Customers</h3><br />
                            <h5>Grow your business with Cloud technology based IVR :</h5><br />
                            <h6>Cloud technology enables interaction between a caller and a computer via telephone. Call will get connected to desire person/department anywhere. Techmet offers Cloud Telephony based innovative reporting system for small, medium and enterprises business in india. Now, without installing a hardware – Possible to have complex and infinitely phone or voice workflow for business – Cloud telephony.</h6>
                        </div>
                      
                       
                    <div className="col-6">
                      <div className="col-1 "></div>
                         <div className="row py-2 ">
                             <div class="btn-group">
                                   <div className="col-4"></div>
                                   <div className="col-2">
                                       <Link href="/contact">
                                         <a className="btn btn-primary">Pricing</a>
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

            {/* Shape Images */}
            <div className="shape2 rotateme">
                <img src="/images/shape2.svg" alt="shape" />
            </div>
            <div className="shape3">
                <img src="/images/shape3.svg" alt="shape" />
            </div>
            <div className="shape4">
                <img src="/images/shape4.svg" alt="shape" />
            </div>
            <div className="shape6 rotateme">
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