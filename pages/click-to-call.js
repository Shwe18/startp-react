import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from "@/components/ClickToCall/MainBanner";
import Welcome from '@/components/ClickToCall/Welcome';
import Features from "@/components/ClickToCall/Features";
import ServiceArea from "@/components/ClickToCall/ServiceArea";
import FunFactsArea from "@/components/Common/FunFactsArea";
import ClickToCallPricing from "@/components/ClickToCall/ClickToCallPricing";
import Partner from "@/components/Common/Partner";
import CTA from '@/components/ClickToCall/CTA';
import Footer from "@/components/_App/Footer";

const ClickToCall = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <Welcome />
            <Features />
            <ServiceArea />
            <FunFactsArea />
            <ClickToCallPricing />
            <Partner />
            <CTA />
            <Footer />
        </>
    )
}

export default ClickToCall;