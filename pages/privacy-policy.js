import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from '@/components/IVRServices/MainBanner';
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';
 
const PrivacyPolicy = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Privacy Policy" />

            <MainBanner />

            <div className="faq-area ptb-80">
                    <div className="faq-accordion">
                      
                        <Accordion allowZeroExpanded preExpanded={['a']}>
                            <AccordionItem uuid="a">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                            Refund Policy
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <h3><strong>If you want your money back, we will do it for you.</strong></h3>
                                    <p>
                                    Techmet provides 30 days money back guarantee, anytime within first 30 days for your service activation. (i.e. Missed Call, Toll Free, IVR Services, Audio-Conference, Lead Management Software, Call recording solution). This could be for many reasons like, you did not find the product useful for your business or you did not find our service good. This is an effort to ensure complete satisfaction and deliver our commitment to make call management a reality for every business.
                                    </p>
                                    <p>
                                    Eligible refunds will be processed and credited automatically to the original mode of payment i.e. credit card, debit card, net banking or any other mode
                                    </p>
                                    <p>
                                    This is an effort to ensure complete satisfaction and deliver our commitments for every business.
                                    </p>
                                    <h4><strong>Why we are doing :-</strong></h4>
                                    <p>Want you to start managing calls without any business risk.</p>
                                    <p>Believe what we are delivering is a great solution for your business.</p>
                                    <p>Want you to believe in our product which is used by thousands of customers every day.</p>
                                    <h4><strong>Refund / Cancellation Process</strong></h4>
                                    <p>For refund request, please email us at support@techmet.in Or call on 9871045375 within thirty (30) days) of completing your order.</p>
                                    <p>Subscriber need to clearly mention the reason for refund.</p>
                                    <p>For refund, we expect your account doesn’t make excessive usage exceeding Fair Usage Policy.</p>
                                    <p>Refund Policy is not applicable on subscriptions bought at discounted prices</p>
                                    <p>No refund will be allowed for texting solutions such as Promotional SMS, Transactional SMS, SMS Short code, Long code etc.</p>
                                    <p>Eligible Refunds will be credited within 30 to 60 days from the date of receiving request for refund.</p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="b">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                            Privacy Policy
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <h4><strong>Personal Information</strong></h4>
                                    <p>
                                    Your “Personal Information” is information that helps us in identifying you, such as your name, email address, mailing address and phone number.
                                    </p>
                                    <h4><strong>Your Control over Your Personal Information</strong></h4>
                                    <p>
                                        New clients registering their details may choose to limit use of their personal information. Your personal information may be retained by us to verify compliance with the agreements, track software downloaded from those pages and track use of other applications available on the Techmet website.
                                    </p>
                                    <h4><strong>Corrections to Your Personal Information</strong></h4>
                                    <p>
                                        It is important that your personal information is accurate and up to date. Registered Techmet users and clients can correct their information by contacting us.
                                    </p>
                                    <h4><strong>Use of Cookies</strong></h4>
                                    <p>
                                    BSD Technologies Pvt Ltd. uses cookies to help navigate through certain parts of the Techmet website and to keep track of incomplete form submissions. We do not store personally identifiable information in the actual cookie. Any identifiable information (like information filled out in a form) is stored in session data in the database.
                                    </p>
                                    <p>We do not share your personal information with other websites.</p>
                                    <h4><strong>Governing Agreements and Law</strong></h4>
                                    <p>
                                        The Privacy Policy is subject to change as per the requirement and at the company’s sole discretion from time to time. You hereby acknowledge and agree that your continued use of the Techmet website and our services constitutes your agreement to this Privacy Policy and any updates hereafter. If at any time the company wishes to alter the Privacy Policy, the changes that are made will be posted on this website at this URL for you to be aware of all the personal information or data that is received, collected, stored, processed, transferred and handled by it.
                                    </p>
                                    <p>
                                        Notwithstanding anything contained herein, this Privacy Policy is subject to any and all agreements that you execute with the Company and shall further be governed by exclusively in accordance with the laws of India.
                                    </p>
                                    <h4><strong>Not directed towards Children</strong></h4>
                                    <p>Techmet does not aim to attract children to its website or solicit data from children. We do not market our services and products to children.</p>
                                    <p>If you have questions regarding this Privacy Policy, please contact us.</p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="c">
                                <AccordionItemHeading>
                                    <AccordionItemButton>

                                        <span>
                                            Fair Usage Policy
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Techmet wants all of our customers to get the best plans as price and features. Fair Usage Policy (“FUP”) defines the fair and responsible usage of Techmet service. “FUP” is designed to prevent fraudulent and abusive use of Techmet services and applicable to all customers irrespective of the plan and features. Techmet may choose to charge, halt, ignore or terminate the service of individual customer based on usage and charge and potential of customer if found violating FUP. Techmet will use the following factors:
                                    </p>
                                    <ol>
                                        <li>The purpose and character of the use, including whether such use is of an unethical, drugs, abuse, financial frauds and any other illegal activity.</li>
                                        <li>The use of the service against Techmet in any manner, directly or indirectly, which include reverse engineering, trade secret revealing and also design and feature copying by any other company or individual.</li>
                                        <li>Though below these limitations will be reviewed time to time to understand change required</li>
                                    </ol>
                                    <p>Techmet allows web access to its customer to access its data, reports or manage service online.</p>
                                    <p>Techmet limits up to 1,000 web page requests per account login per day under fair usage policy.</p>
                                    <p>
                                        Techmet allows API access to allow other applications to access specific Techmet data (1000 API requests per day, 200 API requests per hour, 50 API requests per minute) under fair usage policy.
                                    </p>
                                    <p>
                                        Techmet also supports its client by offering professional recording for IVR,Tollfree Services for the first time. Additionally clients will need to pay for the recording as per the charges for artist.
                                    </p>
                                    <p>
                                    For all per day fair usage policy item defined above not more than 20% of the defined usage limit can be made in one single hour and not more than 20% of the defined usage can be made in a single minute.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        
                            <AccordionItem uuid="f">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                            SLA (Service Level Agreement)
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <h2><strong>Service Level Agreement (SLA) </strong></h2>
                                    <ul className="px-5">
                                        <li className="py-2 "><h6><strong>Standard terms applicable to Service Levels</strong></h6></li>
                                        <li className="py-2 "><h6><strong> Customer Support</strong></h6></li>
                                        <li className="py-2 "><h6><strong>Incident Reported</strong></h6></li>
                                        <li className="py-2 "><h6><strong>Resolution Times Or Revert</strong></h6></li>
                                        <li className="py-2 "><h6><strong>Services Uptime</strong></h6></li>
                                        <li className="py-2 "><h6><strong>Escalation</strong></h6></li>
                                    </ul>
                                    <h4 className ="p-3"> Standard terms applicable to Service Levels: </h4>
                                    <ul>
                                        <li className="py-2 px-4"> SLA is applicable for our <strong>“client”</strong> who paid to BSD Technologies Private Limited.</li>
                                        <li className="py-2 px-4"><strong>“Techmet”</strong> herein refers to the entity, BSD Technologies Private Limited a company registered under the companies Act, 1956 and having its corporate office at SCF-12, Ramneek Complex, NIT-1, Faridabad – 121001.</li>
                                        <li className="py-2 px-4"><strong>“Techmet”</strong> herein refers to the entity, BSD Technologies Private Limited a company registered under the companies Act, 1956 and having its corporate office at SCF-12, Ramneek Complex, NIT-1, Faridabad – 121001.</li>
                                        <li className="py-2 px-4"><strong> "Incident”</strong>means any set of events or circumstances resulting in failure to meet the defined service level.</li>
                                        <li className="py-2 px-4"><strong>“Service”</strong>refers to Techmet Service as given on website www.techmet.in</li>
                                        <li className="py-2 px-4"><strong>“Customer Support”</strong>means services by which Techmet will provide assistance to its Clients to resolve any issue pertaining to their services.</li>
                                    </ul>
                                    <h4 className="py-3"><strong>Customer Support :</strong></h4>
                                    <ul>
                                        <li className="py-2 px-4 "> Subsriber can send email thru registerred email id to us, email to:support@techmet.in</li>
                                        <li className="py-2 px-4">Subscriber can contact thru phone by calling the customer support number at +91 98710 45375.</li>
                                    </ul>
                                    <h4 className="py-3"><strong>Incident Reported :</strong></h4>
                                    <li className="py-2 px-4"><strong> Level 1 – “Normal”  –</strong>Errors or requests those are on business operations, e.g. Recording, Logs, Dashboard analysis etc. Service is not accessible to a particular subscriber.</li>
                                    <li className="py-2 px-4"><strong>Level 2 – “Medium” –</strong>Errors that keep major functions from being performed but work around available e.g., Access to the server is slow; Time delay in response, Server accepts requests but not responding within acceptable time duration etc.</li>
                                    <li className="py-2 px-4"><strong>Level 3 – “Severe” –</strong>Errors that prevent useful work from being completed e.g. Server inaccessible.</li>

                                    <p className="py-3 "><h5><strong>Resolution Times Or Revert : </strong> “Techmet” will revert and resolve the incident/support required as per mention below chart.</h5></p>

                                <div>
                                 <table class="table">
                                     <thead>
                                          <tr>
                                            <th scope="col"></th>
                                            <th scope="col"><h4>Acknowledgement Time</h4></th>
                                            <th scope="col"><h4>Resolution Time (Business Hours)</h4></th>
                                            <th scope="col"></th>
                                          </tr>
                                    </thead>
                                     <tbody>

                                        <tr>
                                        <th scope="row"> </th>
                                        <td></td>
                                        <td><h5>Work Around Time</h5></td>
                                        <td><h5>Permanent Fix Time</h5></td>
                                        </tr>

                                        <tr>
                                        <th scope="row">Level-1</th>
                                        <td>8 Hours</td>
                                        <td>24 Hours</td>
                                        <td>96 Hours</td>
                                        </tr>

                                        <tr>
                                        <th scope="row">Level-2</th>
                                        <td>4 Hours</td>
                                        <td>16 Hours</td>
                                        <td>72 Hours</td>
                                        </tr>

                                        <tr>
                                        <th scope="row">Level-3</th>
                                        <td>2 Hours</td>
                                        <td>8 Hours</td>
                                        <td>48 Hours</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                                    
                                    <h4 className="py-4"><strong>Services Uptime :</strong></h4>
                                    <li className="py-2 px-4">◊   SLA is applicable for our <strong>“client”</strong>  who paid to BSD Technologies Private Limited.</li>
                                    <li className="py-2 px-4">◊  <strong>“Techmet” </strong> herein refers to the entity, BSD Technologies Private Limited a company registered under the companies Act, 1956 and having its corporate office at SCF-12, Ramneek Complex, NIT-1, Faridabad – 121001.</li>
                                    <li className="py-2 px-4">◊   <strong>Incident”</strong>means any set of events or circumstances resulting in failure to meet the defined service level.</li> 
                                    <li className="py-2 px-4">◊   <strong>“Service”</strong>refers to Techmet Service as given on website www.techmet.in</li>        
                                    <li className="py-2 px-4">◊   <strong>“Customer Support”</strong>means services by which Techmet will provide assistance to its Clients to resolve any issue pertaining to their services.</li>                           
                              <div className="py-3">
                                  <li className="py-2 px-4">  ▪   For 0-20 incidents/Month – Zero Penalty</li>
                                  <li className="py-2 px-4">  ▪   For 21-40 incidents/Month – 5% of the Monthly Rental will be refunded</li>
                                  <li className="py-2 px-4">  ▪   For 41-100 incidents/Month – 10% of the Monthly Rental will be refunded</li>
                                  <li className="py-2 px-4">  ▪   For 101- 500 incidents/Month – 50% of the Monthly Rental will be refunded</li>
                                  <li className="py-2 px-4">  ▪   For 501 incidents/Month – 100% of the Monthly Rental will be refunded</li>
                                  </div> 

                                  <div className="py-4"><h5><strong>Escalation :</strong> Client may request escalation of incidents that have not been resolved within the outlined response and resolution times by contacting support directly by phone email.</h5></div>
                              <div>
                              <table class="table">
                                     <thead>
                                          <tr>
                                            <th scope="col"></th>
                                            <th scope="col">Level</th>
                                            <th scope="col">Departnment</th>
                                            <th scope="col">Contact</th>
                                          </tr>
                                    </thead>
                                     <tbody>
                                       
                                        <tr>
                                        <th scope="row">For Support</th>
                                        <td>Help Desk</td>
                                        <td>Contact: (+91 98710 45375)  Or email: support@techmet.in</td>
                                        </tr>

                                        <tr>
                                        <th scope="row">Level-1</th>
                                        <td>Account Manager</td>
                                        <td>Will be allocated at the time of Activation of Services</td>
                                        </tr>

                                        <tr>
                                        <th scope="row">Level-2</th>
                                        <td>Escalation Team</td>
                                        <td>Email: escalation@techmet.in</td>
                                        </tr>

                                        <tr>
                                        <th scope="row">Level-3</th>
                                        <td>Director</td>
                                        <td>Email: info@techmet.in</td>
                                        </tr>
                                        
                                        <tr>
                                        <th ></th>
                                        <td></td>
                                        <td></td>
                                        </tr>

                                    </tbody>
                                    </table>

                            </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>                    
                </div>

 
            <Footer />
        </>
    )
}

export default PrivacyPolicy;