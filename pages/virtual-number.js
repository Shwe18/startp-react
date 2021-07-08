import React from 'react';
import NavbarStyleFour from "@/components/_App/NavbarStyleFour";
import MainBanner from '@/components/VirtualNumber/MainBanner';
import DiscoverArea from '@/components/VirtualNumber/DiscoverArea';
import Services from '@/components/VirtualNumber/Services';
import NewsletterStyleTwo from '@/components/VirtualNumber/NewsletterStyleTwo';
import BigdataFunFacts from '@/components/VirtualNumber/BigdataFunFacts';
import PartnerStyleTwo from '@/components/Common/PartnerStyleTwo';
import Benefits from '@/components/VirtualNumber/Benefits';
import Footer from "@/components/_App/Footer";

const VirtualNumber = () => {
    return (
        <>
            <NavbarStyleFour />
            <MainBanner />
            <DiscoverArea />
            <Services />
            <NewsletterStyleTwo />
            <Benefits />
            <PartnerStyleTwo />
            <BigdataFunFacts />
            <Footer />
        </>
    )
}

export default VirtualNumber;