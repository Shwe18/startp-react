import React from 'react';
import Link from 'next/link'

 const Welcome = () => {
     return(

        <> 
               <div className="container fluid">
               <div className="container">
                <div className="row align-items-center">
                <div className="container fluid">
                    <div className="row">      
                        <div className="col-lg-6">   
                           <h1>Employee Tracking Solution</h1>
                        </div>
                      
                       
                    <div className="col-6">
                      <div className="col-1 "></div>
                         <div className="row ">
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
                              </div> </div>
                        </div>
                    </div>
                
            </div>
                </div>
            </div>
            </div>

            <div className="services-area bg-f7fafd">
                <div className="container ptb-80">
                    <p>Employee Tracking Solution helps to manage your employee by real-time tracking on day activities like attendance, calls recording, day visits, GPS Location, Talk-time, Prospect contacted and much more. It provides actionable data driven insights who helps to improve and execute the team in your tele calling and field operations. Its effective Call Recoding Solution on mobile.</p>
                   <p>Employee Tracking Solution is a SAAS (Software as a service) you only need to pay only charges against what you use. It’s a very simple mobile application which connected to Web App. for tracking and reporting at a glance. Manager can assign, schedule and reschedule the tasks as per employees.</p>
                </div>
            </div>
        </>
     )
 }

export default Welcome;
