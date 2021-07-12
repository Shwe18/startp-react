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
									<a>Data Management</a>
								</Link>
							</h3>

                          
							<ul>
								Manage your customers or contacts in your panel address book.  <br />
								Messages can be scheduled as per requirements
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
								Real time reports downloading in excel format is available with the panel.
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
								SMS can be auto customized, which can pick any cloum from your data (CRM, Data file etc)
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
								Easy to use our control panel with friendly User Interface (UI)<br />
								Our web based control panel is fully featured
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
