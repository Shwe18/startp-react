import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from "@/components/TextSms/MainBanner";
import Features from "@/components/TextSms/Features";
import ServiceArea from "@/components/TextSms/ServiceArea";
import OurServices from "@/components/Tollfree/OurServices";
import FunFactsArea from "@/components/Common/FunFactsArea";
import Partner from "@/components/Common/Partner";
import Footer from "@/components/_App/Footer";

const TextSms = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <Features />
            <ServiceArea />
            <OurServices />
            <FunFactsArea />
            <Partner />s
            <Footer />
        </>
    )
}

export default TextSms;