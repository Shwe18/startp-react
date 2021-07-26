import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from '@/components/ETS/MainBanner';
import Welcome from '@/components/CallCentreDialer/Welcome';
import ServicesArea from '@/components/CallCentreDialer/ServicesArea';
import Partner from '@/components/ETS/Partner';
import Features from '@/components/CallCentreDialer/Features';
import FunFactsArea from '@/components/Common/FunFactsArea'; 0
import CTAStyleTwo from '@/components/CallCentreDialer/CTAStyleTwo';
import Footer from "@/components/_App/Footer";

const CallCentreDialer = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <Welcome />
            <Features />
            <ServicesArea />            
            <FunFactsArea />     
            <Partner />
            <CTAStyleTwo />
            <Footer />
        </>
    )
}

export default CallCentreDialer;