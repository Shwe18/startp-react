import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from "@/components/TextSms/MainBanner";
import Welcome from "@/components/TextSms/Welcome";
import Features from "@/components/TextSms/Features";
import ServiceArea from "@/components/TextSms/ServiceArea";
import FunFactsArea from "@/components/Common/FunFactsArea";
import Partner from "@/components/Common/Partner";
import CTA from "@/components/TextSms/CTA";
import Footer from "@/components/_App/Footer";

const TextSms = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <Welcome />
            <Features />
            <ServiceArea />
            <FunFactsArea />
            <Partner />
            <CTA />
            <Footer />
        </>
    )
}

export default TextSms;