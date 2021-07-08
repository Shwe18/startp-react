import React from 'react';



const CloudWorks = () => {
    return (
<section>
                <div className="agency-services-area pt-80 pb-50">
                <div class ="Container-fluid">
                <hr></hr>
                <h2 class="text-center  p-4 px-5">How Virual Number Actually Works</h2>
                <hr></hr>
                </div>
       

            <div className="Container-fluid" >
                <div className ="row " >
                    <div class ="col-9 p-5">
                        <div>
                        <h6 class="px-5">Anyone who calls on your Business Number, will first hear a Company welcome message (<strong>Welcome to XYZ Company Limited, We offers the special products and services</strong>) and post welcome message extension option will come :</h6>
                   
                            <ul class ="px-5 m-5 display-7">
                            <li><h5>Press 1 for Sales Department</h5></li>
                            <li><h5>Press 2 for HR Department</h5></li>
                            <li><h5>Press 3 for Marketing Department</h5></li>
                            <li><h5>Press 5 for Accounts Department</h5></li>
                            <li><h5>Press 9 for customer care</h5></li>
                            </ul>
                    
                        <h6 class="px-5">Based upon the extension option selected by caller, Incoming call will be automatically routed to any mobile or land-line phone mapped to that extension and agent start speaking with customer.</h6>
                        <h6 class="px-5">And post call completed, System will automatically send sms on caller number.</h6>
                        
                    </div>
                    </div>
                    <div class = "col-lg-3">
                    
                            <div className="row">
                                <h4>Try Free – Signup Instant</h4>
                            <div class="col-12 h-75" >

                                <div className="col-lg-9 col-md-12">
                                    <div className="form-group">
                                        <input type="text" placeholder="Company Name" className="form-control" />
                                    </div>
                                </div>
                                    
                                <div className="col-lg-9 col-md-12">
                                    <div className="form-group">
                                        <input type="email" placeholder="Email" className="form-control" />
                                    </div>
                                </div>
                                    
                                <div className="col-lg-9 col-md-12">
                                    <div className="form-group">
                                        <input type="text" placeholder="Mobile Number" className="form-control" />
                                    </div>
                                </div>
                                    
                                <div className="col-lg-9 col-md-12 ">
                                    <div className="form-group">
                                        <textarea name="message"  rows="3" placeholder="Message" className="form-control"></textarea>
                                    </div>
                                </div>
                                    
                                <div >
                                    <button className="btn btn-primary px-5 " type="submit">Send Enquiry</button>
                                </div>
                         
                            <h5>Instant setup. It’s free!</h5>
                            </div>
                            </div>
                    </div> 
                </div>    
            </div> 

             {/* Shape Images */}
            <div className="shape2 rotateme">
                <img src="/images/shape2.svg" alt="shape" />
            </div>
            <div className="shape3">
                <img src="/images/shape3.svg" alt="shape" />
            </div>
            <div className="shape4">
                <img src="/images/shape4.svg" alt="shape" />
            </div>
            <div className="shape6 rotateme">
                <img src="/images/shape4.svg" alt="shape" />
            </div>
            <div className="shape7">
                <img src="/images/shape4.svg" alt="shape" />
            </div>
            <div className="shape8 rotateme">
                <img src="/images/shape2.svg" alt="shape" />
            </div> 
            </div>
               

    
</section>


    )
}

         

export default CloudWorks;