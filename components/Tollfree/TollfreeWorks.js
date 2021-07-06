import React from 'react';
// import Link from 'next/link';
// import * as Icon from 'react-feather';

const TollfreeWorks = () => {
    return (
        <div className="features-area pt-80 pb-50 bg-f7fafd">
            <div className="container">
                
                <h2>How to Tollfree Services Actually Works</h2>
                <div className="bar"></div>
                <p>
                    Anyone who calls on your Tollfree Number (<strong>1800 XXX XXXX</strong>) will first hear a Company welcome message (<strong>Welcome to XYZ Company Limited, We offers the special products and services</strong>) and post welcome message ivr extension option will come :
                </p>
                
                <ul>
                    <strong><li>Press 1 for Sales Department</li>
                    <li>Press 2 for HR Department</li>
                    <li>Press 3 for Marketing Department</li>
                    <li>Press 5 for Accounts Department</li>
                    <li>Press 9 for customer care</li></strong>
                </ul>

                <p>Based upon the extension option selected by caller, Incoming call will be automatically routed to any mobile or land-line phone mapped to that extension and agent start speaking with customer.</p>
                
                <p>And post call completed, System will automatically send sms on caller number with your customer sender ID, <strong>Example :  VM-ICICIB, HP-TECHMT</strong>)</p>
                
            </div>
        </div>
    )
}

export default TollfreeWorks;  