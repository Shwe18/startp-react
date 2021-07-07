import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from '@/components/MissedCallService/MainBanner';
import PartnerStyleTwo from '@/components/Common/PartnerStyleTwo';
import OurServices from '@/components/MissedCallService/OurServices';
import Cta from '@/components/MissedCallService/Cta';
import FunFactsArea from '@/components/Common/FunFactsArea';
import Features from '@/components/MissedCallService/Features';
import MissedCallPricing from '@/components/MissedCallService/MissedCallPricing';
import WhyWeAreBest from '@/components/MissedCallService/WhyWeAreBest';
import Footer from "@/components/_App/Footer";

const MissedCallService = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <OurServices />
            <FunFactsArea />
            <Features />
            <MissedCallPricing />
            <WhyWeAreBest />
            <PartnerStyleTwo />
            <Cta />
            <Footer />
        </>
    )
}

export default MissedCallService;