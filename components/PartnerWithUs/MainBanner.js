import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
		<div className="main-banner">
			<div className="d-table">
				<div className="d-table-cell">
					<div className="container">
						<div className="row h-100 justify-content-center align-items-center">
							<div className="col-lg-5">
								<div className="hero-content">
									<h1>WELCOME TO TECHMET</h1>
									<div className="row">
                                        <div className="col-2 px-5">
                                            <Link href="/contact">
                                                <a className="btn btn-primary">Pricing</a>
                                            </Link>
                                        </div>
                                        <div className="col-1 px-5"></div>
                                        <div className="col-2 px-5">
                                            <Link href="/contact">
                                                <a className="btn btn-primary">FAQ</a>
                                            </Link>
                                            </div>
                                
                                    </div>
                                    <div className="row py-5">
                                        <div className="col-2 px-5">
                                            <Link href="/contact">
                                                <a className="btn btn-primary">LOGIN</a>
                                            </Link>
                                        </div>
                                        <div className="col-1 px-5"></div>
                                          <div className="col-2 px-5">
                                            <Link href="/contact">
                                                <a className="btn btn-danger">FREETRIAL</a>
                                            </Link>
                                           </div>
                                       
                                    </div>
								</div>
							</div>

							<div className="col-lg-6 offset-lg-1">
								<div className="banner-image">
                                    <img 
                                        src='/images/banner-image/man.png' 
                                        className="animate_animated animatefadeInDown animate_delay-0.1s" 
                                        alt="man" 
                                    />
                        
                                    <img 
                                        src="/images/banner-image/code.png" 
                                        className="animate_animated animatefadeInUp animate_delay-0.1s" 
                                        alt="code"
                                    />
                                
                                    <img 
                                        src="/images/banner-image/carpet.png" 
                                        className="animate_animated animatefadeInLeft animate_delay-0.1s" 
                                        alt="carpet"
                                    />
                            
                                    <img 
                                        src="/images/banner-image/bin.png" 
                                        className="animate_animated animatezoomIn animate_delay-0.1s" 
                                        alt="bin"
                                    />
                        
                                    <img 
                                        src="/images/banner-image/book.png" 
                                        className="animate_animated animatebounceIn animate_delay-0.1s" 
                                        alt="book"
                                    />
                        
                                    <img 
                                        src="/images/banner-image/dekstop.png" 
                                        className="animate_animated animatefadeInDown animate_delay-0.1s" 
                                        alt="dekstop"
                                    />
                    
                                    <img 
                                        src="/images/banner-image/dot.png" 
                                        className="animate_animated animatezoomIn animate_delay-0.1s" 
                                        alt="dot"
                                    />
                        
                                    <img 
                                        src="/images/banner-image/flower-top-big.png" 
                                        className="animate_animated animatefadeInUp animate_delay-0.1s" 
                                        alt="flower-top-big"
                                    />
                        
                                    <img 
                                        src="/images/banner-image/flower-top.png" 
                                        className="animate_animated animaterotateIn animate_delay-0.1s" 
                                        alt="flower-top"
                                    />
                    
                                    <img 
                                        src="/images/banner-image/keyboard.png" 
                                        className="animate_animated animatefadeInUp animate_delay-0.1s" 
                                        alt="keyboard"
                                    />
                            
                                    <img 
                                        src="/images/banner-image/pen.png" 
                                        className="animate_animated animatezoomIn animate_delay-0.1s" 
                                        alt="pen"
                                    />
                                
                                    <img 
                                        src="/images/banner-image/table.png" 
                                        className="animate_animated animatezoomIn animate_delay-0.1s" 
                                        alt="table"
                                    />
                    
                                    <img 
                                        src="/images/banner-image/tea-cup.png" 
                                        className="animate_animated animatefadeInLeft animate_delay-0.1s" 
                                        alt="tea-cup"
                                    />
                        
                                    <img 
                                        src="/images/banner-image/headphone.png" 
                                        className="animate_animated animaterollIn animate_delay-0.1" 
                                        alt="headphone"
                                    />
                            
                                    <img 
                                        src="/images/banner-image/main-pic.png" 
                                        className="animate_animated animatefadeInUp animate_delay-0.1" 
                                        alt="main-pic"
                                    />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

            {/* Shape Images */}
			<div className="shape1">
				<img src="/images/shape1.png" alt="shape"/>
			</div>
			<div className="shape2 rotateme">
				<img src="/images/shape2.svg" alt="shape"/>
			</div>
			<div className="shape3">
				<img src="/images/shape3.svg" alt="shape"/>
			</div>
			<div className="shape4">
				<img src="/images/shape4.svg" alt="shape"/>
			</div>
			<div className="shape5">
				<img src="/images/shape5.png" alt="shape"/>
			</div>
			<div className="shape6 rotateme">
				<img src="/images/shape4.svg" alt="shape"/>
			</div>
			<div className="shape7">
				<img src="/images/shape4.svg" alt="shape"/>
			</div>
			<div className="shape8 rotateme">
				<img src="/images/shape2.svg" alt="shape"/>
			</div>
		</div>
    )
}

export default MainBanner