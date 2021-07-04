import React from 'react';
import * as Icon from 'react-feather';

const ContactInfo = () => {
    return (
        <div className="contact-info-area ptb-80">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <Icon.Mail />
                            </div>
                            <h3>Mail Here</h3>
                            <p><a href="mailto:Support@techmet.in">Support@techmet.in</a></p>
                            <p><a href="mailto:info@techmet.in">info@techmet.in</a></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <Icon.MapPin />
                            </div>
                            <h3>Visit Here</h3>
                            <p>5121/31, F-Block, Rajendra Park, Old</p>
                            <p>Gurgaon, Near PNB Bank, Gurgaon -122001</p>

                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <Icon.Phone />
                            </div>
                            <h3>Call Here</h3>
                            <p><a href="tel:18001206389">1800-120-6389</a></p>
                            <br />
                        </div>
                    </div>
                </div>


                
                <div className="row justify-content-center pt-50">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <Icon.MapPin />
                            </div>
                            <h3>Faridabad Office:</h3>
                            <p>SCO-12, 1st Floor, Ramneek Shopping</p>
                            <p>Complex, Part-II, NIT-1, Faridabad -121001</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <Icon.MapPin />
                            </div>
                            <h3>Bangalore Office:</h3>
                            <p>1st Stage, 80 feet Road, Indira Nagar, H</p>
                            <p>Colony, Bengaluru, Karnataka – 560038</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ContactInfo;  