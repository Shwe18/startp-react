import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from '@/components/ETS/MainBanner';
import Partner from '@/components/ETS/Partner';
import AboutUsContent from '@/components/ETS/AboutUsContent';
import OurServices from '@/components/ETS/OurServices';
import FunFactsArea from '@/components/Common/FunFactsArea';
import ETSPricing from '@/components/ETS/ETSPricing';
import Features from '@/components/ETS/Features';
import Newsletter from '@/components/ETS/Newsletter';
import Footer from "@/components/_App/Footer";

const ETS = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <AboutUsContent />
            <OurServices />
            <FunFactsArea />
            <ETSPricing />
            <Features />
            <Newsletter />
            <Partner />
            <Footer />
        </>
    )
}

export default ETS;