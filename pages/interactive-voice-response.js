import React from 'react';
import NavbarStyleTwo from "@/components/_App/NavbarStyleTwo";
import MainBanner from "@/components/CloudTelephony/MainBanner";
import DiscoverArea from '@/components/InteractiveVoiceResponse/DiscoverArea';
import Detail from '@/components/InteractiveVoiceResponse/Detail';
import Benefits from '@/components/CloudTelephony/Benefits';
import Features from '@/components/CloudTelephony/Features';
import DigitalAgencyFunFacts from '@/components/CloudTelephony/DigitalAgencyFunFacts';
import CloudWork from '@/components/CloudTelephony/CloudWork';
import PartnerStyleTwo from '@/components/Common/PartnerStyleTwo';
import Footer from "@/components/_App/Footer";

const PCRepair = () => {
    return (
        <>
            <NavbarStyleTwo />
            <MainBanner />
            <DiscoverArea />
            <Detail />
            <Benefits />
            <Features />
            <CloudWork />
            <PartnerStyleTwo />
            <DigitalAgencyFunFacts />
            <Footer />
        </>
    )
}

export default PCRepair;