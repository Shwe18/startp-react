import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from '@/components/ETS/MainBanner';
import Partner from '@/components/ETS/Partner';
import WhatWeOffer from '@/components/ETS/WhatWeOffer';
import AboutUsContent from '@/components/ETS/AboutUsContent';
import OurServices from '@/components/ETS/OurServices';
import FunFactsArea from '@/components/Common/FunFactsArea';
import ETSPricing from '@/components/ETS/ETSPricing';
import Features from '@/components/ETS/Features';
import FeedbackStyleFour from '@/components/Common/FeedbackStyleFour';
import Newsletter from '@/components/Common/Newsletter';
import Footer from "@/components/_App/Footer";

const ETS = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <Partner />
            <WhatWeOffer />
            <AboutUsContent />
            <OurServices />
            <FunFactsArea />
            <ETSPricing />
            <Features />
            <FeedbackStyleFour />
            <Newsletter />
            <Footer />
        </>
    )
}

export default ETS;