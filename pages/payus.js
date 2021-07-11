import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from '@/components/PayUs/MainBanner';
import PartnerStyleTwo from '@/components/Common/PartnerStyleTwo';
import Cta from '@/components/PayUs/Cta';
import FunFactsArea from '@/components/Common/FunFactsArea';
import Features from '@/components/PayUs/Features';
import WhyWeAreBest from '@/components/MissedCallService/WhyWeAreBest';
import Footer from "@/components/_App/Footer";

const PayUs = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <Features />
            <FunFactsArea />
            <WhyWeAreBest />
            <PartnerStyleTwo />
            <Cta />
            <Footer />
        </>
    )
}

export default PayUs;