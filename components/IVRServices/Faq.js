import React from 'react';
import Link from 'next/link';
import Navbar from "@/components/_App/Navbar";
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
            <Navbar />

            <div className="faq-area ptb-80">
                <div className="container">
                    <div className="faq-accordion">
                        <div className="section-title">
                            <h1>Frequently Asked Questions</h1>    
                            <p>Do you have Question ? We’ve got answers. If you’ve some other queries, <Link href="contactus"><a><strong>Contact us</strong></a></Link></p>
                            <hr className="py-1"></hr>
                        </div>
                        <Accordion allowZeroExpanded preExpanded={['a']}>
                            <AccordionItem uuid="a">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                            Question: Need any customised solution which interact with caller, based on your CRM/database?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Answer : Yes, We offerred customised solution based on requirement. IVR will be played or interact with caller thru POST / GET/ REST API.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="b">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                            Question: Can we have IVR Solution on our current number?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Answer : Sure, You can have IVR Services on your current number via just forwarding your number to our server number. Now days, Unlimited call forwarding is covered in basic package.</p>

                                    <p>We undestand, Business number is very hard to change. So please contact us <strong>+91-9871045375</strong> or <u>Click here</u>.               </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="c">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                            Question: Do you offers international IVR/Virtual Number, I want to give local number for my caller who are calling from different countries?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Answer : Yes, We are serving 4000+ customers in 65 countries. Please call us on <strong><u>+91-9871045375</u></strong> or share your requirement Click here
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        
                            <AccordionItem uuid="d">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                            Question: Do you provide dedicated IVR Setup?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Answer : Yes, We provide dedicated setup on cloud which will mantained specifically. Please call us on <strong><u>+91-9871045375</u></strong> or share your requirement Click here
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="e">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                            Question: Do you provide multi level IVR. We have multiple offices in different location with list of product range?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        <p><strong>Answer : Yes,</strong> We can customised the IVR with multi-level extension format which modified as per customers need. We have just shared an example below for acknowledgement.</p>
                                        
                                        <p><strong>Example:-</strong></p>

                                        <p>Welcome to ABC Company Limited</p>

                                        <li>Press 1 for English</li>
                                        <li>Press 2 for Hindi</li><br />
                                        <p>If customer choosed the extension 1, then</p>

                                        <li>Please Press 1 for Delhi</li>
                                        <li>Please Press 2 for Mumbai</li>
                                        <li>Please Press 3 for Pune</li><br/ >

                                        <p>If customer choosed the Delhi Location via Extension 1</p>

                                        <li>Please press 1 for Sale</li>
                                        <li>Please Press 2 for Support</li>
                                        <li>Please Press 9 for customer care</li>
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