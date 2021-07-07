import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from "@/components/Tollfree/MainBanner";
import Features from "@/components/Tollfree/Features";
import ServiceArea from "@/components/ClickToCall/ServiceArea";
import OurServices from "@/components/Tollfree/OurServices";
import FunFactsArea from "@/components/Common/FunFactsArea";
import ClickToCallPricing from "@/components/ClickToCall/ClickToCallPricing";
import Partner from "@/components/Common/Partner";
import Footer from "@/components/_App/Footer";

const ClickToCall = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <Features />
            <ServiceArea />
            <OurServices />
            <FunFactsArea />
            <ClickToCallPricing />
            <Partner />s
            <Footer />
        </>
    )
}

export default ClickToCall;