import React from 'react';
import NavbarStyleFour from "@/components/_App/NavbarStyleFour";
import MainBanner from '@/components/VirtualNumber/MainBanner';
import WhatWeDo from '@/components/VirtualNumber/WhatWeDo';
import DiscoverArea from '@/components/VirtualNumber/DiscoverArea';
import Services from '@/components/VirtualNumber/Services';
import BigdataFunFacts from '@/components/VirtualNumber/BigdataFunFacts';
import IndustriesWeServe from '@/components/VirtualNumber/IndustriesWeServe';
import NewsletterStyleTwo from '@/components/VirtualNumber/NewsletterStyleTwo';
import Footer from "@/components/_App/Footer";

const VirtualNumber = () => {
    return (
        <>
            <NavbarStyleFour />
            <MainBanner />
            <WhatWeDo />
            <DiscoverArea />
            <Services />
            <BigdataFunFacts />
            <IndustriesWeServe />
            <NewsletterStyleTwo />
            <Footer />
        </>
    )
}

export default VirtualNumber;