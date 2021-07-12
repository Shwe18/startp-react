import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

const OurServices = () => {
    return (
        <div className="iot-services-area pt-80 pb-50">
            <div className="container justify-content-center">
                <div className="section-title">
                    <h2>Benefits</h2>
                </div>
                
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="single-repair-services bg1">
                            <div className="icon">
                                <i className="flaticon-software"></i>
                            </div>

                            <h3>Lead Generation</h3>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-repair-services bg2">
                            <div className="icon">
                                <i className="flaticon-gear"></i>
                            </div>

                            <h3>Free callback for Caller</h3>
                        
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-repair-services bg3">
                            <div className="icon">
                                <i className="flaticon-skyline"></i>
                            </div>

                            <h3>Customer Support/Update</h3>
                            
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-repair-services bg4">
                            <div className="icon">
                                <i className="flaticon-car-insurance"></i>
                            </div>

                            <h3>Application Download</h3>
                            
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-repair-services bg5">
                            <div className="icon">
                                <i className="flaticon-factory"></i>
                            </div>

                            <h3>Opinion Poll</h3>
                            
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-repair-services bg6">
                            <div className="icon">
                                <i className="flaticon-chip"></i>
                            </div>

                            <h3>Customer Engagement</h3>
                            
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-repair-services bg6">
                            <div className="icon">
                                <i className="flaticon-chip"></i>
                            </div>
                            <h3>OPT/Mobile Verification</h3>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-repair-services bg6">
                            <div className="icon">
                                <i className="flaticon-chip"></i>
                            </div>
                            <h3>Plug into your system</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurServices;
