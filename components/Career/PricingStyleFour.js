import React, { Component } from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

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
                        <h2>Our Careers</h2>
                        <div className="bar"></div>
                    </div>
                    
                    <div className="tab pricing-tab bg-color">
                        <ul className="tabs">
                            <li
                                className="current"
                                onClick={(e) => this.openTabSection(e, 'tab1')}
                            >
                                INSIDE SALES
                            </li>
                            
                            <li onClick={(e) => this.openTabSection(e, 'tab2')}>
                                SALES MANAGER
                            </li>

                            <li
                                className="current"
                                onClick={(e) => this.openTabSection(e, 'tab3')}
                            >
                                HR
                            </li>
                        </ul>

                        <div className="tab_content">
                            <div id="tab1" className="tabs_item">
                                <div className="container justify-content-center">
                                    <h6><strong>Job Responsibility :</strong></h6>
                                    <ol>
                                        <p>Identify, generate, propose and close sales opportunities for Companys service over the phone.</p>
                                        <p>Generate sales by cold/warm calling current and prospective customers.</p>
                                        <p>Managing the entire Sales Cycle. (New Sales/ Cross Sales/ Upsell)</p>
                                        <p>Work in a team environment stake holders.</p>
                                        <p>Meet and/or exceed individual product and services target set by company.</p>
                                    </ol>
                                    <h6><strong>Desired Candidate Profile :</strong></h6>
                                    <ol>
                                        <p>Must have experience in Inside Sales/ Cold Calling / Lead generation.</p>
                                        <p>Experience of Interaction with the business owners.</p>
                                        <p>Excellent Communication, writing skills</p>
                                        <p>Should have closed the leads in past</p>
                                        <p>Experience of business operations</p>
                                    </ol>
                                    <h6><strong>Desired Candidate Profile :</strong></h6>
                                    <ol>
                                        <p>Salary is no bar for right candidate.</p>
                                    </ol>
                                </div>
                            </div>

                            <div id="tab2" className="tabs_item">
                                <div className="container justify-content-center">
                                <p><strong>Job Purpose:</strong> To achieve sales targets by making effective sales presentations in a venue setting; to maintain high standards of service quality and attract and convert prospects into sales.</p>
                                    <br />
                                    <h6><strong>Job Responsibility :</strong></h6>
                                    <ol>
                                        <p>Achieving stretched targets in a result-focused environment at IT/Software world.</p>
                                        <p>Making powerful sales presentations resulting in high conversion ratio.</p>
                                        <p>Handling objections and resolving customer conflicts by constantly connecting with them through meetings.</p>
                                        <p>Maintaining strong client relationship and high level of customer service.</p>
                                        <p>Preparing pre-sales proposals for prospective clients.</p>
                                        <p>Identifying potential customers and new business opportunities within and outside the venue.</p>
                                        <p>Keeping abreast with the organization’s Services.</p>
                                        <p>Maintaining consistent average productivity.</p>
                                        <p>Provide necessary support in first time for new customer and generate quality referrals from them.</p>
                                    </ol>
                                    <h6><strong>Skill Required:</strong></h6>
                                    <ol>
                                    <p>Applicant must enjoy working in a fast-paced environment and be able to thrive under pressure.</p>
                                    <p>Should possess sound knowledge about the local market and IVR, LMS ot other IT/Software Services</p>
                                    <p>Possess strong communication skills.</p>
                                    <p>Have high closure orientation.</p>  
                                    </ol>                             
                                </div>
                            </div>

                            <div id="tab3" className="tabs_item">
                                <div className="container justify-content-center">
                                <h6><strong>Job Responsibility:</strong></h6>         
                  <ol>
                    <li>Lead the development and execution of the Human Resources strategic plan and shorter term plans and initiatives to support the business strategies and promote a unified company culture.</li>
                    <li>To develop and implement HRpolicy across all areas of the organization including improving performance, maximizing attendance and providing effective management of change.</li>
                    <li>Develop an annual performance review process, including supervisors.</li>
                    <li>Create and implement recruitment and selection processes (requisition approval, interview techniques, assessments, reference checks, extending offers, etc.).</li>
                    <li>On joining, ensure proper on-boarding, hand-holding and orientation and induction of the new joinees.</li>
                    <li>Identify gaps in training programs and develop programs that meet the needs of management and employees.</li>
                    <li>Ensure all policies and procedures are up to date and legally compliant.</li>
                    <li>Maintains manual and electronic documents, files and records (e.g. background information, personnel files, vacancy listings, etc.) for the purpose of providing accurate information in compliance with regulatory requirements and established guidelines.</li>
                    <li>Ensure effective implementation of the disciplinary and grievance procedures for all employee groups.</li>
                    <li>Ensure payroll is completed accurately and to deadline.</li>
                    <li>Audit and authenticate all documents related to legal, salary statements and distribution, policies etc.</li>
                    <li>Maintain professional relations with the industry partners.</li>
                  </ol>
                  <br />
                  <h6><strong>Desired candidate profile :</strong></h6>
                  <p>Candidate should have excellent interpersonal skills.</p>
                  <p>Candidate should be able to meet Hiring needs on priority in Minimum Time.</p>
                  <p>Candidate Should have good Experience in Hiring through different channels : Social networking, Campus, Employee Referrals, Job Portals,</p>
                  <p>Candidates should have experience in Candidates should have experience in Statutory Norms, Industrial Relations, Grievance Handling, Payment of Wages act, Labour Laws,PF & ESI.</p>
                  <h6><strong>Salary :</strong></h6>
                  <p>Salary is no bar for right candidate</p>
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