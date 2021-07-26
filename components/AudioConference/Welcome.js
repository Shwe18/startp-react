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
                    <div className="row justify-content-center align-items-center">
                        <h4 className="text-center ">Audio Conference Service – Connect the Caller’s on cloud space at any time, from any location !</h4><br />
                        <p>Techmet offers reservation-less (Demand PIN) conferencing dial-in Or dial-out conferencing which are easy to use and ensure quick connectivity. There is no need to make any reservations. No pre-booking is required. Just send an invite and calling number link to all attendees with the time and date and you are on.</p>
                        <p>By using Techmet’s cloud based audio-conferencing system you help increase productivity of your employees by enabling them to get together and collaborate at any time, from any location with local support available 24/7. With audio-conferencing accessing international audience, colleagues, vendors, partners etc. becomes easy.</p>
                        <p>This service is delivered in the cloud telephony system and fully integrated with Techmet’s cystal clear audio conferencing with live customer service at all times. The scalability, reliability, and flexibility of Techmet systems can expand your required conferencing solution into limitless communications possibilities.</p>
                    </div>
                </div>    


        </>
    )
}

export default Welcome;