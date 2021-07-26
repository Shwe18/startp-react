import React from 'react';
import Link from 'next/Link';

const Welcome = () => {
     return(
        <>
            <div className="services-area">
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
                </div>
            </div>
        </>
     )
 }

export default Welcome;