import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from "@/components/Tollfree/MainBanner";
import Features from "@/components/Tollfree/Features";
import ServicesArea from "@/components/Tollfree/ServicesArea";
import OurServices from "@/components/Tollfree/OurServices";
import FunFactsArea from "@/components/Common/FunFactsArea";
import TollfreePricing from "@/components/Tollfree/TollfreePricing";
import Partner from "@/components/Common/Partner";
import Footer from "@/components/_App/Footer";

const ITStartup2 = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <Features />
            <ServicesArea />
            <OurServices />
            <FunFactsArea />
            <TollfreePricing />
            <Partner />s
            <Footer />
        </>
    )
}

export default ITStartup2;