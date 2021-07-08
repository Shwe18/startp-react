import React from 'react';
import Link from 'next/link';

const BigdataFunFacts = () => {
    return (
        <div className="funfacts-area bg-image ptb-80">
			<div className="container">
				<div className="section-title">
					<h2>We always try to understand users expectation</h2>
					<div className="bar"></div>
					
				</div>

				<div className="row">
					<div className="col-lg-3 col-md-3 col-6 col-sm-6">
						<div className="single-funfact">
							<h3>180K</h3>
							<p>Downloaded</p>
						</div>
					</div>

					<div className="col-lg-3 col-md-3 col-6 col-sm-6">
						<div className="single-funfact">
							<h3>20K</h3>
							<p>Feedback</p>
						</div>
					</div>

					<div className="col-lg-3 col-md-3 col-6 col-sm-6">
						<div className="single-funfact">
							<h3>500+</h3>
							<p>Workers</p>
						</div>
					</div>

					<div className="col-lg-3 col-md-3 col-6 col-sm-6">
						<div className="single-funfact">
							<h3>70+</h3>
							<p>Contributors</p>
						</div>
					</div>
				</div>

				<div className="contact-cta-box">
					<h3>Know more about Tollfree Service </h3>
					<p>Call on +91-9871045375</p>

                    <Link href="/contact">
					    <a className="btn btn-primary">Request for demo</a>
                    </Link>
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
    )
}

export default BigdataFunFacts;  