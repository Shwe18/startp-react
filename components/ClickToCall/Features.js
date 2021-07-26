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
									<a className="text-center">Professional Image</a>
								</Link>
							</h3>

							<ul>

							
								* An ideal facility from the organisation to facilitate customers to get in touch easily <br />
								* Customisable call process<br />
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
									<a className="text-center">Super Advance Alert & Report</a>
								</Link>
							</h3>

							<ul>
								* Integrate with Website, Application Or CRM<br />
								* Calls logs & Call recording to be used for in-depth analysis<br />
								* Real time analysis<br />
								
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
									<a className="text-center">24/7 Customer Availability</a>
								</Link>
							</h3>

							<ul>
								* Intelligent call routing<br />
								* Multiple calls connectivity in backend<br />
								* Office timing Setup<br />
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
									<a className="text-center">Simple Online Panel</a>
								</Link>
							</h3>

							<ul>
								* Easy Manageable<br />
								* Multiple agent log in<br />
								* Easily installed<br />
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
