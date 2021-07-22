import React from 'react';
import * as Icon from 'react-feather';
import Link from 'next/link';

const Features = () => {
    return (
        <div className="boxes-area ptb-100 py-5">
			<div className="container ptb-80">
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
								<li> Welcome message </li>
								<li> Language preference</li>
								<li> Multi Level IVR</li>
								<li> Onhold Music</li>
								<li> Voicemail</li>
								<li> Sticky agent</li>
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
									<a>Super Advance Alert & Report</a>
								</Link>
							</h3>

							<ul>
								<li> 2 way SMS Notification</li>
								<li> Email alerts</li>
								<li> Call Recording</li>
								<li> Call logs</li>
								<li> Real time analysis</li>
								<li> Number blacklisting</li>
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
									<a>24/7 Customer Availability</a>
								</Link>
							</h3>

							<ul>
								<li> Always Connected</li>
								<li> Intelligent Call Routing</li>
								<li> Multiple Call Connected at same time</li>
								<li> Office timing Setup</li>
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
								<li> Easy Manageable</li>
								<li> Multi Agent login</li>
								<br />
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
