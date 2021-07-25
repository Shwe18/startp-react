import React from 'react';
import Link from 'next/link';

 const Welcome = () => {
     return(
        <>
            <div className="services-area text-center bg-f7fafd ptb-80">
            <div className="row">      
                        <div className="col-lg-6 text-center">   
                     
                            <h2 className ="py-1">Welcome To Techmet</h2>
                        </div>
                    <div className="col-6">
                            <div className="row py-2 ">
                                <div class="btn-group">
                                   <div className="col-1"></div>
                                    <div className="col-2">
                                       <Link href="/contact">
                                            <a className="btn btn-danger">LOGIN</a>
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
                <div className="container">
                   <p><strong>Employee Tracking Solution</strong> helps to manage your employee by real-time tracking on day activities like attendance, calls recording, day visits, GPS Location, Talk-time, Prospect contacted and much more. It provides actionable data driven insights who helps to improve and execute the team in your tele calling and field operations. Its effective Call Recoding Solution on mobile.</p>
                    <br />
                    <p>Employee Tracking Solution is a SAAS (Software as a service) you only need to pay only charges against what you use. It’s a very simple mobile application which connected to Web App. for tracking and reporting at a glance. Manager can assign, schedule and reschedule the tasks as per employees.</p>
                </div>
            </div>
        </>
     )
 }

export default Welcome; 