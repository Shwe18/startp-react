import React from 'react';
import NavbarStyleTwo from "@/components/_App/NavbarStyleTwo";
import MainBanner from '@/components/IVRServiceProvider/MainBanner';
import DiscoverArea from '@/components/IVRServiceProvider/DiscoverArea';
import Detail from '@/components/IVRServiceProvider/Detail';
import Services from '@/components/VirtualNumber/Services';
import NewsletterStyleTwo from '@/components/VirtualNumber/NewsletterStyleTwo';
import BigdataFunFacts from '@/components/VirtualNumber/BigdataFunFacts';
import PartnerStyleTwo from '@/components/Common/PartnerStyleTwo';
import Benefits from '@/components/VirtualNumber/Benefits';
import Footer from "@/components/_App/Footer";

const IVRServiceProvider = () => {
    return (
        <>
            <NavbarStyleTwo />
            <MainBanner />
            <DiscoverArea />
            <Detail />
            <Services />
            <NewsletterStyleTwo />
            <Benefits />
            <PartnerStyleTwo />
            <BigdataFunFacts />
            <Footer />
        </>
    )
}

export default IVRServiceProvider;