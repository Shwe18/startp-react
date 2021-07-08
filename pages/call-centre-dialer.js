import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from '@/components/ETS/MainBanner';
import Partner from '@/components/ETS/Partner';
import Features from '@/components/CallCentreDialer/Features';
import AboutUsContent from '@/components/ETS/AboutUsContent';
import OurServices from '@/components/ETS/OurServices';
import FunFactsArea from '@/components/Common/FunFactsArea';
import ETSPricing from '@/components/ETS/ETSPricing';
import FeedbackStyleFour from '@/components/Common/FeedbackStyleFour';
import Newsletter from '@/components/Common/Newsletter';
import Footer from "@/components/_App/Footer";

const CallCentreDialer = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <Partner />
            <Features />
            <AboutUsContent />
            <OurServices />
            <FunFactsArea />
            <ETSPricing />
          
            <FeedbackStyleFour />
            <Newsletter />
            <Footer />
        </>
    )
}

export default CallCentreDialer;