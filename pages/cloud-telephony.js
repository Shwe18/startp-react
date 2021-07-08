import React from 'react';
import NavbarStyleFive from "@/components/_App/NavbarStyleFive";
import MainBanner from "@/components/CloudTelephony/MainBanner";
import Benefits from '@/components/CloudTelephony/Benefits';
import Features from '@/components/CloudTelephony/Features';
import OurServices from '@/components/CloudTelephony/OurServices';
import DigitalAgencyFunFacts from '@/components/CloudTelephony/DigitalAgencyFunFacts';
import CloudWork from '@/components/CloudTelephony/CloudWork';
import PartnerStyleTwo from '@/components/Common/PartnerStyleTwo';

import Footer from "@/components/_App/Footer";

const CloudTelephony = () => {
    return (
        <>
            <NavbarStyleFive />
            <MainBanner />
            <OurServices />
            <Benefits />
            <Features />
            <CloudWork />
            <PartnerStyleTwo />
           
            <DigitalAgencyFunFacts />
            <Footer />
        </>
    )
}

export default CloudTelephony;