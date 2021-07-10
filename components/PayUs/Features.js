import React from 'react';
import Link from 'next/link';

const Features = () => {
    return (
        <>
            <div className="iot-features-area ptb-80 bg-f7fafd">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 iot-features-content">
                        <p>
                        BSD Technologies Private Limited is the leading cloud based service provider. We provides cost effective and cutting edge IT solutions that are reliable. You can pay online for services.  Our bank account details are mentioned below.
                        </p>

                        <div className="container pt-50">
                        <h6 className="text-center"><strong>Our Product & Services :</strong></h6>
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <h5>IVR Solutions</h5>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <p><u><Link href="ivr-services"><a>http://techmet.in/ivr-services</a></Link></u></p>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <h5>Missed Call Solutions</h5>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <p><u><Link href="missed-call"><a>http://techmet.in/missed-call</a></Link></u></p>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <h5>Tollfree Services</h5>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <p><u><Link href="tollfree"><a>http://techmet.in/tollfree</a></Link></u></p>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <h5>Lead Management Software</h5>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <p><u><Link href="betyphon"><a>http://techmet.in/betyphon</a></Link></u></p>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <h5>Audio Conference Solutions</h5>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <p><u><Link href="audio-conference"><a>http://techmet.in/audio-conference</a></Link></u></p>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <h5>Video Conference Solutions</h5>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <p><u><Link href="video-conference"><a>http://techmet.in/video-conference</a></Link></u></p>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <h5>SMS Solutions</h5>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <p><u><Link href="text-sms"><a>http://techmet.in/text-sms</a></Link></u></p>
                            </div>

                        </div>
                    </div>
                        </div>

                        <div className="col-lg-6 iot-features-image">
                            <img 
                                src='/images/iot-features-image/iot-feature-image1.png'
                                className="animate__animated animate__fadeInUp animate__delay-0.6s" 
                                alt="image" 
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="iot-features-area ptb-80">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 iot-features-image">
                            <img 
                                src='/images/iot-features-image/iot-feature-image2.png'
                                className="animate__animated animate__fadeInUp animate__delay-0.6s" 
                                alt="image"
                            />
                        </div>
                        
                        <div className="col-lg-6 col-md-6 border">
                            <h2 className="text-center pb-50"><strong>Account Information</strong></h2>
            
                            <div className="row">
                                <div className="col-lg-3 col-md-3 border">
                                    <h5><strong>Company Name</strong></h5>
                                </div>

                                <div className="col-lg-9 col-md-9 border">
                                    <h5><strong>BSD Technologies Private Limited</strong></h5>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-3 col-md-3 border">
                                    <h5><strong>Address</strong></h5>
                                </div>

                                <div className="col-lg-9 col-md-9 border">
                                    <h5>SCF-12, 1st Floor, Ramneek Shopping Complex, Faridabad, above to ICICI Bank</h5>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-3 col-md-3 border">
                                    <h5><strong>Account number</strong></h5>
                                </div>

                                <div className="col-lg-9 col-md-9 border">
                                    <h5>51780200000180</h5>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-3 col-md-3 border">
                                    <h5><strong>IFSC Code</strong></h5>
                                </div>

                                <div className="col-lg-9 col-md-9 border">
                                    <h5>BARB0RAJGAO</h5>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-3 col-md-3 border">
                                    <h5><strong>Branch</strong></h5>
                                </div>

                                <div className="col-lg-9 col-md-9 border">
                                    <h5>Rajendra Park, Gurgaon</h5>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Features;
