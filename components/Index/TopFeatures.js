import React from 'react';
import * as Icon from 'react-feather';
import Link from 'next/link';

const TopFeatures = () => {
    return (
        <div className="boxes-area hosting-boxes-area">
            <div className="container ptb-80">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="single-box">
                            <div className="icon">
                                <Icon.DollarSign />
                            </div>
                            <h3>
                                <Link href="/feature-details">
                                    <a>IVR Services</a>
                                </Link>
                            </h3>
                            <ul>
                                Professional Image <br />
                                <br />
                                Super Advance Alert & Report  <br />
                                <br />
                                24/7 Customer Availability <br />
                                <br />
                                Simple Online Panel
                                <br />
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-box bg-f78acb">
                            <div className="icon">
                                <Icon.Database />
                            </div>
                            <h3>
                                <Link href="/feature-details">
                                    <a>Virtual Number</a>
                                </Link>
                            </h3>
                            <ul>
                                Professional IVR<br />
                                <br />
                                Call Recording <br />
                                <br />
                                Analytical Report<br />
                                <br />
                                Forwarding Activity<br />
                          
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-box bg-c679e3">
                            <div className="icon">
                                <Icon.BarChart />
                            </div>
                            <h3>
                                <Link href="/feature-details">
                                    <a>BeTyphon</a>
                                </Link>
                            </h3>
                            <ul>
                                Single Dashboard to manage all leads <br />
                                Call Recording & Advance Reports<br />
                                Integrations all sources for leads<br />
                                Scalable with Pay Per Go
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-box bg-eb6b3d">
                            <div className="icon">
                                <Icon.Tablet />
                            </div>
                            <h3>
                                <Link href="/feature-details">
                                    <a>Cloud Telephony</a>
                                </Link>
                            </h3>
                            <ul>
                                Online Dashboard<br />
                                <br />
                                Multi-level IVR<br />
                                <br />
                                API Integration<br />
                                <br />
                                Black-listing Caller Number
                                <br />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopFeatures;
