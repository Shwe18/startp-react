import React from 'react';
import * as Icon from 'react-feather';
import Link from 'next/link';

const Features = () => {
    return (
        <div className="boxes-area ptb-80">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-md-6">
						<div className="single-box">
							<div className="icon">
                                <Icon.Server />
							</div>

							<h3>
								<Link href="/feature-details">
								<a>Professional Image</a>
								</Link>
							</h3>

							<ul>
								 Call disconnected after ring<br />
								 Thankyou SMS to caller<br />
								 <br />
							     <br />
								 <br />
								 <br />
							</ul>
						</div>
					</div>

					<div className="col-lg-3 col-md-6">
						<div className="single-box bg-f78acb">
							<div className="icon">
                                <Icon.Code />
							</div>

							<h3>
								<Link href="/feature-details">
								<a>Beneficial Usage</a>
								</Link>
							</h3>

							<ul>
								OTP/ Mobile Verification<br />
							    Application Download<br />
								Opinion Poll<br />
								Customer Engagaement<br />								
							</ul>
						</div>
					</div>

					<div className="col-lg-3 col-md-6">
						<div className="single-box bg-c679e3">
							<div className="icon">
                                <Icon.Users />
							</div>

							<h3>
								<Link href="/feature-details">
								<a>24/7 Multiple Connectivity</a>
								
								</Link>
							</h3>

							<ul>
								Always Connected,<br />
							    Multiple Call Connected on Single Number,<br />
								<br />
								<br />
								<br />
								<br />
								<br />
							</ul>
						</div>
					</div>

					<div className="col-lg-3 col-md-6">
						<div className="single-box bg-eb6b3d">
							<div className="icon">
                                <Icon.GitBranch />
							</div>

							<h3>
								<Link href="/feature-details">
								<a>Simple Online Panel</a>
								</Link>
							</h3>

							<ul>
								Easy Manageable<br />
								Real-time analysis<br />
								Call Logs<br />
								<br />
								<br />
								<br />
								<br />
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Features;
