import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from "@/components/Tollfree/MainBanner";
import Features from "@/components/Tollfree/Features";
import ServicesArea from "@/components/Tollfree/ServicesArea";
import FunFactsArea from "@/components/Common/FunFactsArea";
import TollfreePricing from "@/components/Tollfree/TollfreePricing";
import Partner from "@/components/Common/Partner";
import Footer from "@/components/_App/Footer";

const Tollfree = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <Features />
            <ServicesArea />
            <FunFactsArea />
            <TollfreePricing />
            <Partner />s
            <Footer />
        </>
    )
}

export default Tollfree;