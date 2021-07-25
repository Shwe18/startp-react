import React from 'react';
import NavbarStyleThree from "@/components/_App/NavbarStyleThree";
import MainBanner from '@/components/BeTyphon/MainBanner';
import Partner from '@/components/BeTyphon/Partner';
import Welcome from '@/components/BeTyphon/Welcome';
import WhatWeOffer from '@/components/BeTyphon/WhatWeOffer';
import ServicesArea from '@/components/BeTyphon/ServicesArea';
import OurServices from '@/components/BeTyphon/OurServices';
import FunFactsArea from '@/components/Common/FunFactsArea';
import BetyphonPricing from '@/components/BeTyphon/BetyphonPricing';
import Newsletter from '@/components/BeTyphon/Newsletter';
import Footer from "@/components/_App/Footer";

const BeTyphon = () => {
    return (
        <>
            <NavbarStyleThree />
            <MainBanner />
            <Welcome />
            <WhatWeOffer />
            <ServicesArea />
            <OurServices />
            <FunFactsArea />
            <BetyphonPricing /> 
            <Partner />
            <Newsletter />
            <Footer />
        </>
    )
}

export default BeTyphon;