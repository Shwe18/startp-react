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

                            <h3>Welcome Message</h3>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-repair-services bg2">
                            <div className="icon">
                                <i className="flaticon-gear"></i>
                            </div>

                            <h3>Attendance Reports</h3>
                        
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-repair-services bg3">
                            <div className="icon">
                                <i className="flaticon-skyline"></i>
                            </div>

                            <h3>Recording & Playback</h3>
                            
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-repair-services bg4">
                            <div className="icon">
                                <i className="flaticon-car-insurance"></i>
                            </div>

                            <h3>Demand PIN</h3>
                            
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-repair-services bg5">
                            <div className="icon">
                                <i className="flaticon-factory"></i>
                            </div>
                            <h3>Entry & Exit Tones</h3>
                            <br />
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-repair-services bg6">
                            <div className="icon">
                                <i className="flaticon-chip"></i>
                            </div>

                            <h3>Name Record & Playback</h3>
                            
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-repair-services bg6">
                            <div className="icon">
                                <i className="flaticon-chip"></i>
                            </div>
                            <br />
                            <h3>Operator Dial-In/Out</h3>
                            <br />
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-repair-services bg6">
                            <div className="icon">
                                <i className="flaticon-chip"></i>
                            </div>
                            <br />
                            <h3>Leader Hangup</h3>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurServices;
