import React from 'react';
import Link from 'next/link';

 const Welcome = () => {
     return(
        <>
            <div className="services-area text-center bg-f7fafd">
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
                <div class="container pb- 80">
                    <h4 className="py-1">Create A Big Company Image with IVR Services</h4>
                    <br />
                    <h5>Grow your business with Cloud technology based IVR :</h5>
                    <br />
                    <p>IVR stands for Interactive Voice Response. This technology enables interaction between a caller and a computer via the telephone. Callers can interact with IVR systems by pressing numbers on a telephone keypad or by speaking simple commands to answer the computer’s voice prompts. Call will be get connected to desire person/department anywhere. Techmet offers Cloud PBX is innovative reporting system for small, medium and enterprises business in india.</p>    
                </div>
            </div>
        </>
     )
 }

export default Welcome;