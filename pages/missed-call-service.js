import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from '@/components/MissedCallService/MainBanner';
import Welcome from '@/components/MissedCallService/Welcome';
import PartnerStyleTwo from '@/components/Common/PartnerStyleTwo';
import OurServices from '@/components/MissedCallService/OurServices';
import Cta from '@/components/MissedCallService/Cta';
import FunFactsArea from '@/components/Common/FunFactsArea';
import MissedCallPricing from '@/components/MissedCallService/MissedCallPricing';
import WhyWeAreBest from '@/components/MissedCallService/WhyWeAreBest';
import Footer from "@/components/_App/Footer";

const MissedCallService = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <Welcome />
            <OurServices />
            <WhyWeAreBest />
            <FunFactsArea />
            <MissedCallPricing />
            <PartnerStyleTwo />
            <Cta />
            <Footer />
        </>
    )
}

export default MissedCallService;