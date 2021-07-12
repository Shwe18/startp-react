import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import PricingStyleFour from '@/components/PricingPlans/PricingStyleFour';
<<<<<<< HEAD
import CloudTelephonyPricing from '@/components/PricingPlans/CloudTelephonyPricing'; 
=======

import CloudTelephonyPricing from '@/components/CloudTelephony/CloudTelePhonyPricing'; 
>>>>>>> 2deeb017c79291117ba865786c362f9d0efa6105
 
const Pricing = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Pricing" />

            <div className="pt-80">
                <PricingStyleFour  />
            </div> 
<<<<<<< HEAD
            
=======
      <CloudTelephonyPricing />
>>>>>>> 2deeb017c79291117ba865786c362f9d0efa6105

            <Footer />
        </>
    )
}

export default Pricing;