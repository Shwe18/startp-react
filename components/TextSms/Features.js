import React from 'react';
import * as Icon from 'react-feather';
import Link from 'next/link';

const Features = () => {
    return (
        <div className="boxes-area">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-md-6">
						<div className="single-box">
							<div className="icon">
                                <Icon.Server />
							</div>

							<h3>
								<Link href="/feature-details">
									<a>Data Management</a>
								</Link>
							</h3>

                          
							<ul>
								<li> Manage your customers or contacts in your panel address book.  </li>
								<li> Messages can be scheduled as per requirements</li>
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
								<a>Super Advance Report</a>
								</Link>
							</h3>

							<ul>
								<li> Real time reports downloading in excel format is available with the panel.</li>
								<br />
								<br />
								<br />
								<br />
								
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
                                <a>Customization</a>
								</Link>
							</h3>

							<ul>
								<li> SMS can be auto customized, which can pick any cloum from your data (CRM, Data file etc)</li>
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
								<li>  Easy to use our control panel with friendly User Interface (UI)</li>
								<li>  Our web based control panel is fully featured</li>
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
