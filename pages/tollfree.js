import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from "@/components/Tollfree/MainBanner";
import Welcome from "@/components/Tollfree/Welcome";
import Features from "@/components/Tollfree/Features";
import ServicesArea from "@/components/Tollfree/ServicesArea";
import FunFactsArea from "@/components/Common/FunFactsArea";
import TollfreePricing from "@/components/Tollfree/TollfreePricing";
import Partner from "@/components/Common/Partner";
import CTA from '@/components/Tollfree/CTA';
import Footer from "@/components/_App/Footer";

const Tollfree = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <Welcome />
            <Features />
            <ServicesArea />
            <FunFactsArea />
            <Partner />
            <TollfreePricing />
            <CTA />
            <Footer />
        </>
    )
}

export default Tollfree;