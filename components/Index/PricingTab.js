import React, { Component } from 'react';
import { TabProvider, TabPanel, TabLabel, TabContent, Tab, TabList } from 'react-web-tabs'
import 'react-web-tabs/dist/react-web-tabs.css';
import CloudTelephony from "@/components/Tabs/CloudTelephony";
import SmsPricing from '@/components/Tabs/SmsPricing';
import DialerPricing from '@/components/Tabs/DialerPricing'; 

const blockElements = {
  content: 'tabs-content',
  panel: 'tabs-panel',
  label: 'tabs-title'
}


const PricingTab = () => {
    return (
      <div className="container ptb-80 pb-50">
        <h3 className="text-center"><strong>Standard plan designed for businesses</strong></h3>
        <br />
        <h4 className="text-center">If plan doesn’t suits you, Call us for Customised Plan on +91-9871045375 </h4>
        <br />
        <div className="row"></div><TabProvider defaultTab="one">
            <section className="my-tabs">
              <TabList className="my-tablist">
                <Tab className="col-lg-4 col-md-4" tabFor="one">Cloud Telephony</Tab>
                <span className="divider"></span>
                <Tab className="col-4" tabFor="two">SMS</Tab>
                <span className="divider"></span>
                <Tab className="col-4" tabFor="three" className=" col-4 my-tab">Dialer</Tab>
              </TabList>
              <div className="wrapper">
                <TabPanel tabId="one">
                  <CloudTelephony />
                </TabPanel>
                <TabPanel tabId="two">
                  <SmsPricing />
                </TabPanel>
                <TabPanel tabId="three">
                  <DialerPricing />
                </TabPanel>
              </div>
              <h5 className="text-right"><strong>Note: </strong> All charges of our services are exclusive of taxes, payable annually and include 24*7 customer support.</h5>
            </section>
          </TabProvider>
          </div>
    
    )
}

export default PricingTab;