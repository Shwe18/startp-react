import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from '@/components/VoiceSms/MainBanner';
import Partner from '@/components/ETS/Partner';
import WhatWeOffer from '@/components/VoiceSms/WhatWeOffer';
import AboutUsContent from '@/components/VoiceSms/AboutUsContent';
import OurServices from '@/components/VoiceSms/OurServices';
import ServicesArea from '@/components/VoiceSms/ServicesArea';
import FunFactsArea from '@/components/Common/FunFactsArea';
import VoiceSmsPricing from '@/components/VoiceSms/VoiceSmsPricing';
import Newsletter from '@/components/VoiceSms/Newsletter';
import Footer from "@/components/_App/Footer";

const VoiceSms = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <AboutUsContent />
            <Partner />
            <WhatWeOffer />
            <ServicesArea />
            <OurServices />
            <FunFactsArea />
            <VoiceSmsPricing />
            <Newsletter />
            <Footer />
        </>
    )
}

export default VoiceSms;