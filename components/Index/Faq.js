import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

const FAQ = () => {
    return(
        <>

            <div className="faq-area ptb-80">
                <div className="container">
                    <div className="faq-accordion">
                        <div className="section-title">
                            <h1>Frequently Asked Question</h1>    
                        </div> 
                        <Accordion allowZeroExpanded preExpanded={['a']}>
                            <AccordionItem uuid="a">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                            Question: How to get the demo of services?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Answer : Yes, We offers the demo of our standard solutions. Call us on customer care number +919871045375 or we can also contact with you, Click here.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="b">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                            Question: How to become channel partner for products?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Answer : You can partner with us for fastest business growth across the globe. Join us, as <strong>Solutionist</strong> Or <strong>Channel Partner</strong> as per business dedication and expectation on it. Want to know more about the program Apply here.                                    
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="c">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                            Question: How to pay for service subscription?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p><strong>Answer : You can pay us by any mode of payment – Online-NEFT & RTGS, Cheque, Cash Submission to bank, Paytm etc. Details are below.</strong></p>
                                       <p><strong>Payment Link :</strong> www.techmet.in/pay</p>

                                       <p> <strong>Bank Details:</strong>
                                        <ul>
                                            Company Name    : BSD Technologies Private Limited<br />
                                            Account Number  : 51780200000180<br />
                                            IFSC Code       : BARB0RAJGAO<br />
                                            Branch          : Rajendra Park, Gurgaon<br />
                                            Swift Code      : BARBINBBGUR<br />
                                        </ul>
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        
                            <AccordionItem uuid="d">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                        Question : Do you offer international services?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Answer : Yes, Today we trusted by 5000+ businesses across 65 Countries and offering reliability & intellience thorugh our cloud telephony and cloud communication products.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="e">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                            Question : What about Data security on cloud solutions?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Answer :  Standard international mechanisum get followed to secure data servers with backup policies. Disclaimer-NDA (Non Disclosure Agrrement) & SLA (Service Level Agreeement) get signed with client. All solutions are Signup/Login by secure process (OTP/Email Confirmations)
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="f">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                            Question : Can i change my plan later - after subscribing the service?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Answer : You can upgrade or downgrade your plan anytime as per your requirements or usage. You can call us +91-9871045375 or drop an email to support@techmet.in with your contact and service details. We’ll be happy to assist you.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    
                </div>
            </div>
 
        </>
 
    )
}



export default FAQ;