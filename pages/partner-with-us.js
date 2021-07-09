import React from 'react';
import NavbarStyleTwo from "@/components/_App/NavbarStyleTwo";
import MainBanner from "@/components/CloudTelephony/MainBanner";
import PartnerWith from "@/components/Partnerwithus/PartnerWith";
import PartnerStyleTwo from '@/components/Common/PartnerStyleTwo';
import BigdataFunFacts from '@/components/VirtualNumber/BigdataFunFacts';
import Footer from "@/components/_App/Footer";


 
const PartnerWithUs = () => {
    return (
        <>
            <NavbarStyleTwo />
            <MainBanner />
            <PartnerWith />
            <PartnerStyleTwo />
            <BigdataFunFacts />
            <Footer />
        </>
    )
}

export default PartnerWithUs;