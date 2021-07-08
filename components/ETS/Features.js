import React from 'react';
import { TabProvider, TabPanel, TabLabel, TabContent, Tab, TabList } from 'react-web-tabs'
import 'react-web-tabs/dist/react-web-tabs.css';

const blockElements = {
	content: 'tabs-content',
	panel: 'tabs-panel',
	label: 'tabs-title'
  }
  

const Features = () => {
    return (
	
        <div className="features-area ptb-80 pb-50">
			<div className="row justify-content-center align-items-center">
				<div className="section-title">
					<h2><u>Simple way to monitor the team</u></h2>
				</div>
				<div className="row">
					<div className="col-4">
						<p><strong>Dashboard (Track Team Performance)</strong></p>
						<br />
						<p>
							Dashboard gives overview of calls by team, monitor the member specifically by number of Calls in details, calls bifrication in seconds with talk-time value.
						</p>
						<br />
						<p><strong>Call Details (Track Call details)</strong></p>
						<br />
						<p>All detail will helps to track the each call (Incoming,Outgoing, Missed) handled by team with timestamp and recording play option
						</p>
						<br />
						<p><strong>Call Recordings (Listen Call recordings)</strong></p>
						<br />
						<p>With Call Recording you can listen any call made by team member from anywhere with filter of region, call status, duration, and date n time</p>
					</div>	

					<div className="col-8">
					
						<TabProvider defaultTab="one">
							<section className="my-tabs">
								<TabList className="my-tablist">
									<Tab className="col-lg-3 col-md-3" tabFor="one">DASHBOARD</Tab>
										<span className="divider"></span>
									<Tab className="col-lg-3 col-md-3" tabFor="two">CALL RECORDINGS</Tab>
										<span className="divider"></span>
									<Tab className="col-lg-3 col-md-3" tabFor="three" className=" col-4 my-tab">CALL DETAILS</Tab>
								</TabList>
								<div className="wrapper">
									<TabPanel tabId="one">
										<img src = "/images/ETS/ETS-1.png" alt=""/>
									</TabPanel>
									<TabPanel tabId="two">
										<img src = "/images/ETS/ETS-2.png" alt=""/>
									</TabPanel>
									<TabPanel tabId="three">
										<img src = "/images/ETS/ETS-3.png" alt=""/>
									</TabPanel>
								</div>
							</section>
          				</TabProvider>
					</div>				
				</div>
			</div>		
		</div>
    )
}

export default Features;
