import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from '@/components/VoiceSms/MainBanner';
import Partner from '@/components/ETS/Partner';
import WhatWeOffer from '@/components/VoiceSms/WhatWeOffer';
import AboutUsContent from '@/components/VoiceSms/AboutUsContent';
import OurServices from '@/components/ETS/OurServices';
import FunFactsArea from '@/components/Common/FunFactsArea';
import VoiceSmsPricing from '@/components/VoiceSms/VoiceSmsPricing';
import Newsletter from '@/components/Common/Newsletter';
import Footer from "@/components/_App/Footer";

const VoiceSms = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <AboutUsContent />
            <Partner />
            <WhatWeOffer />
            <OurServices />
            <FunFactsArea />
            <VoiceSmsPricing />
            <Newsletter />
            <Footer />
        </>
    )
}

export default VoiceSms;