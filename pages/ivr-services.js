import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from "@/components/IVRServices/MainBanner";
import Welcome from '@/components/IVRServices/Welcome';
import Features from "@/components/IVRServices/Features";
import ServicesArea from "@/components/IVRServices/ServicesArea";
import FunFactsArea from "@/components/Common/FunFactsArea";
import PricingStyleOne from "@/components/PricingPlans/PricingStyleOne";
import Partner from "@/components/Common/Partner";
import FAQ from "@/components/IVRServices/FAQ";
import CTA from '@/components/IVRServices/CTA';
import Footer from "@/components/_App/Footer";

const IVRServices = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <Welcome />
            <Features />
            <ServicesArea />
            <FunFactsArea />
            <PricingStyleOne />
            <Partner />
            <FAQ />
            <CTA />
            <Footer />
        </>
    )
}

export default IVRServices;