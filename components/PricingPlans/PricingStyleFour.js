import React, { Component } from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';
import CloudTelephonyPricing from "@/components/CloudTelephony/CloudTelePhonyPricing";
// import SmsPricing from '@/components/PricingPlans/SmsPricing';
// import DialerPricing from '@/components/PricingPlans/DialerPricing';

class PricingStyleFour extends Component {

    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        evt.currentTarget.className += "current";
    }

    render() {
        return (
            <div className="pricing-area pb-50">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Pricing Plan</h2>
                        <div className="bar"></div>
                        <h2>Standard plan designed for businesses</h2>
                        <h4>If plan doesn’t suits you, Call us for Customised Plan on +91-9871045375 </h4>
                    </div>
                    
                    <div className="tab pricing-tab bg-color">
                        <ul className="tabs">
                            <li
                                className="current"
                                onClick={(e) => this.openTabSection(e, 'tab1')}
                            >
                                Cloud Telephony
                            </li>
                            
                            <li onClick={(e) => this.openTabSection(e, 'tab2')}>
                                SMS
                            </li>

                            <li
                                className="current"
                                onClick={(e) => this.openTabSection(e, 'tab3')}
                            >
                                Dialer
                            </li>

                        </ul>

                        <div className="tab_content">
                            <div id="tab1" className="tabs_item">
                                <div className="row justify-content-center">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing-table">
                                            <div className="pricing-header">
                                                <h5>Startup Plan-Missed Call</h5>
                                                <h3>Rs. 6000</h3>
                                                <h6>PerYear</h6>
                                            </div>
                                        
                                                <div className="pricing-features">
                                                <ul>
                                                    <li><i data-feather="check"></i> 500 Calls / Daily</li>
                                                    <li><i data-feather="check"></i> Missed Call Feature</li>
                                                    <li><i data-feather="check"></i> SMS Alert</li>
                                                    <li><i data-feather="check"></i> Number Blacklist</li>
                                                    <li><i data-feather="check"></i> Online Panel</li>
                                                    
                                                </ul>
                                            </div>
                                            
                                            <div className="pricing-footer">
                                                <Link href="signup">
                                                    <a className="btn btn-primary">START DEMO</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing-table active-plan">
                                            <div className="pricing-header">
                                                <h5>Startup Plan-IVR Service</h5>
                                                <h3>Rs. 12000</h3>
                                                <h6>PerYear</h6>
                                            </div>
                                    
                                            
                                            <div className="pricing-features">
                                                <ul>
                                                <li><i data-feather="check"></i> 12000 Forwarding Minute</li>
                                                    <li><i data-feather="check"></i> Welcome Message</li>
                                                    <li><i data-feather="check"></i> IVR Solution</li>
                                                    <li><i data-feather="check"></i> Call Recording</li>
                                                    <li><i data-feather="check"></i> Online Panel</li>
                                                </ul>
                                            </div>
                                            
                                            <div className="pricing-footer">
                                                <Link href="signup">
                                                    <a className="btn btn-primary">START DEMO</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing-table">
                                            <div className="pricing-header">
                                                <h5>Startup Plan-TollFree</h5>
                                                <h3>Rs. 18000</h3>
                                                <h6>PerYear</h6>
                                                
                                            </div>
                                    
                                            
                                            <div className="pricing-features">
                                                <ul>
                                                    <li><i data-feather="check"></i> 12000 Incoming Minute</li>
                                                    <li><i data-feather="check"></i> Welcome Message</li>
                                                    <li><i data-feather="check"></i> IVR Solution</li>
                                                    <li><i data-feather="check"></i> Call Recording</li>
                                                    <li><i data-feather="check"></i> Call Rate : 1.5 Per minute</li>
                                                </ul>
                                            </div>
                                            
                                            <div className="pricing-footer">
                                                <Link href="signup">
                                                    <a className="btn btn-primary">START DEMO</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="tab2" className="tabs_item">
                                <div className="row justify-content-center">
                                    <h5><strong>Our SMS charges are based on delivery only, non-delivered message will get reveresed within 24 hours..</strong></h5>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="pricing-box">
                                            <h4>Text SMS (Broadcast)</h4>
                                            <h3>Based on Usage</h3>
                                            <p>Transactional, Promotional, OTP</p>
                                       </div>

                                       <div className="pricing-features text-center">
                                           <ul>
                                                <Icon.Check /> Advanced Dashboard<br />
                                                <Icon.Check /> SMS Scheduling<br />
                                                <Icon.Check /> Customised Messaging<br />
                                                <Icon.Check /> Multiple Sender ID's<br />
                                                <Icon.Check /> Real-time Delivery Report<br />
                                                <Icon.Check /> SMS in Multiple Lenguages<br />
                                                <Icon.Check /> API Integration<br />
                                            </ul>
                                        </div>

                                        <div className="pricing-footer text-center">
                                                <Link href="signup">
                                                    <a className="btn btn-primary">START DEMO</a>
                                                </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="pricing-box">
                                                    <h4>Voice SMS (Broadcast)</h4>
                                                    <h3>Based on Usage</h3>
                                                    <p>Transactional, Promotional, OTP</p>
                                            </div>

                                            <div className="pricing-features text-center">
                                                <ul>
                                                        <Icon.Check /> Advanced Dashboard<br />
                                                        <Icon.Check /> Voice Call Scheduling<br />
                                                        <Icon.Check /> Customised Messaging<br />
                                                        <Icon.Check /> Text to Speech Or Voice file Upload<br />
                                                        <Icon.Check /> Real-time Delivery Report<br />
                                                        <Icon.Check /> SMS in Multiple Lenguages<br />
                                                        <Icon.Check /> API Integration
                                                </ul>
                                            </div>

                                            <div className="pricing-footer text-center">
                                                    <Link href="signup">
                                                        <a className="btn btn-primary">START DEMO</a>
                                                    </Link>
                                            </div>
                                    </div>
                                </div>
                            </div>

                            <div id="tab3" className="tabs_item">
                                <div className="row justify-content-center">
                                    <h5><strong>Dialer helps to manage and increase business for Call Centre</strong></h5>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing-table">
                                            <div className="pricing-header">
                                                <h3>Highlights</h3>
                                                <h6>Subscribe as per Requirement</h6>
                                                <br />
                                            </div>
                                        
                                                <div className="pricing-features">
                                                <ul>
                                                    <li><i data-feather="check"></i> Hardware</li>
                                                    <li><i data-feather="check"></i> Integration</li>
                                                    <li><i data-feather="check"></i> CRM</li>
                                                    <li><i data-feather="check"></i> Accessability</li>
                                                    <li><i data-feather="check"></i> Calling Type</li>
                                                    <li><i data-feather="check"></i> Setup Cost</li>
                                                    <li><i data-feather="check"></i> Call Recording</li>
                                                    <li><i data-feather="check"></i> Lead Capture</li>
                                                    <li><i data-feather="check"></i> Lead distribution</li>
                                                    <li><i data-feather="check"></i> Re-assignment</li>
                                                    <li><i data-feather="check"></i> Custom work-flow</li>
                                                    <li><i data-feather="check"></i> Report</li>
                                                    <li><i data-feather="check"></i> Task & Reminder</li>
                                                </ul>
                                            </div>
                                            
                                            <div className="pricing-footer">
                                                <Link href="pricing">
                                                    <a className="btn btn-primary">More Details</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing-table active-plan">
                                            <div className="pricing-header">
                                                <h5>BeTyphon</h5>
                                                <h3>Mobile Dialer</h3>
                                                <h6>Rs. 1000/Per User</h6>
                                            </div>
                                    
                                            
                                            <div className="pricing-features">
                                                <ul>
                                                    <li><i data-feather="check"></i> MObile only</li>
                                                    <li><i data-feather="check"></i> Whatsapp/SMS/Email</li>
                                                    <li><i data-feather="check"></i> Mobile & Web</li>
                                                    <li><i data-feather="check"></i> Online - (Cloud Infra)</li>
                                                    <li><i data-feather="check"></i> Preview Calling</li>
                                                    <li><i data-feather="check"></i> Pay per Go Model (As Usage)</li>
                                                    <li><i data-feather="check"></i> On Cloud</li>
                                                    <li><i data-feather="check"></i> Automatic (API/Email)</li>
                                                    <li><i data-feather="check"></i> Auto Distribution</li>
                                                    <li><i data-feather="check"></i> Available</li>
                                                    <li><i data-feather="check"></i> Available</li>
                                                    <li><i data-feather="check"></i> Real-time Report</li>
                                                    <li><i data-feather="check"></i> Automatic</li>
                                                </ul>
                                            </div>
                                            
                                            <div className="pricing-footer">
                                                <Link href="signup">
                                                    <a className="btn btn-primary">START DEMO</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing-table">
                                            <div className="pricing-header">
                                                <h5>Auto DialerPricing</h5>
                                                <h3>Dialer - On Premises</h3>
                                                <br />
                                            </div>
                                    
                                            
                                            <div className="pricing-features">
                                                <ul>
                                                    <li><i data-feather="check"></i> Hardware Setup</li>
                                                    <li><i data-feather="check"></i> Customization - on requirement</li>
                                                    <li><i data-feather="check"></i> Web CRM</li>
                                                    <li><i data-feather="check"></i> On Premises - (Intranet)</li>
                                                    <li><i data-feather="check"></i> Predicitive & Preview Calling</li>
                                                    <li><i data-feather="check"></i> Minimum - 15 Users Setup</li>
                                                    <li><i data-feather="check"></i> On Premises</li>
                                                    <li><i data-feather="check"></i> Customization - on requirement</li>
                                                    <li><i data-feather="check"></i> Auto Distribution</li>
                                                    <li><i data-feather="check"></i> Available</li>
                                                    <li><i data-feather="check"></i> Available</li>
                                                    <li><i data-feather="check"></i> Real-time Report</li>
                                                    <li><i data-feather="check"></i> Automatic</li>
                                                </ul>
                                            </div>
                                            
                                            <div className="pricing-footer">
                                                <Link href="pricing">
                                                    <a className="btn btn-primary">Contact Us</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="shape1">
                    <img src="/images/shape1.png" alt="shape" />
                </div>
                <div className="shape2 rotateme">
                    <img src="/images/shape2.svg" alt="shape" />
                </div>
                <div className="shape3">
                    <img src="/images/shape3.svg" alt="shape" />
                </div>
                <div className="shape4">
                    <img src="/images/shape4.svg" alt="shape" />
                </div>
                <div className="shape7">
                    <img src="/images/shape4.svg" alt="shape" />
                </div>
                <div className="shape8 rotateme">
                    <img src="/images/shape2.svg" alt="shape" />
                </div>
            </div>
        );
    }
}

export default PricingStyleFour;