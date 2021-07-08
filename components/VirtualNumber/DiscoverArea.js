import React from 'react';
import Link from 'next/link';

const DiscoverArea = () => {
    return (
        <div className="discover-area ptb-80">
            <div className="container">
                <div className="row align-items-center">
                <div className="container fluid">
                <div className="content">
                    <div className="row">      
                        <div className="col-lg-6">   
                     
                            <h1 className ="py-1">Welcome To Techmet</h1>
                            <h3>Thousands of businesses reaping huge benefits from <strong>Virtual Number</strong> services</h3><br />
                            <h5>Grow your business with Virtual Number :</h5><br />
                            <h6>Virtual Number helps to manage business without moving from your seat. Calls can be forwarded to personal mobile phone so you manage your business anytime, anywhere. It enables interaction between a caller and a computer via telephone. Now, without installing a hardware – Possible to have complex and infinitely phone or voice workflow for business – Cloud telephony.</h6>									
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

                         
                            <div className="py-4"><img src="" /></div>
                            
                           
              
                          </div>
                        </div>
                    </div>
                </div>
            </div>


           
                </div>
            </div>

            <div className="analytics-shape1">
                <img src="/images/bigdata-analytics/analytics-shape1.png" alt="image" />
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
    )
}

export default DiscoverArea;  