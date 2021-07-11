import React from 'react';
import Link from 'next/link';


const Products = () => {
    return(
        <div>
            
            <div className="service-area ptb-80 pb-50">
            <div className="container">
                <div className = "row">
                <div className="col-lg-3 col-md-3 text-center">
                    <h5><strong>Get in Touch</strong></h5>
                </div>

                <div className="col-lg-9 col-md-9">
                    <p>
                        BSD Technologies Private Limited is the leading cloud based service provider. We provides cost effective and cutting edge IT solutions that are reliable. You can pay online for services.  Our bank account details are mentioned below.
                    </p>

                    <div className="container">
                        <h4 className="text-center"><strong>Our Product & Services :</strong></h4>
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <h5><strong>IVR Solutions</strong></h5>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <h5><u><Link href="ivr-services"><a>http://techmet.in/ivr-services</a></Link></u></h5>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <h5><strong>Missed Call Solutions</strong></h5>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <h5><u><Link href="missed-call"><a>http://techmet.in/missed-call</a></Link></u></h5>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <h5><strong>Tollfree Services</strong></h5>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <h5><u><Link href="tollfree"><a>http://techmet.in/tollfree</a></Link></u></h5>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <h5><strong>Lead Management Software</strong></h5>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <h5><u><Link href="betyphon"><a>http://techmet.in/betyphon</a></Link></u></h5>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <h5><strong>Audio Conference Solutions</strong></h5>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <h5><u><Link href="audio-conference"><a>http://techmet.in/audio-conference</a></Link></u></h5>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <h5><strong>Video Conference Solutions</strong></h5>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <h5><u><Link href="video-conference"><a>http://techmet.in/video-conference</a></Link></u></h5>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <h5><strong>SMS Solutions</strong></h5>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <h5><u><Link href="text-sms"><a>http://techmet.in/text-sms</a></Link></u></h5>
                            </div>

                        </div>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Products;
