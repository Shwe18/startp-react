import React from 'react';
import NavbarStyleThree from "@/components/_App/NavbarStyleThree";
import MainBanner from '@/components/ETS/MainBanner';
import Partner from '@/components/ETS/Partner';
import Welcome from '@/components/ETS/Welcome';
import OurServices from '@/components/ETS/OurServices';
import FunFactsArea from '@/components/Common/FunFactsArea';
import BetyphonPricing from '@/components/ETS/ETSPricing';
import Newsletter from '@/components/ETS/Newsletter';
import Footer from "@/components/_App/Footer";

const EmployeeTrackingSolution = () => {
    return (
        <>
            <NavbarStyleThree />
            <MainBanner />
            <Welcome />
            <OurServices />
            <FunFactsArea />
            <BetyphonPricing /> 
            <Partner />
            <Newsletter />
            <Footer />
        </>
    )
}

export default EmployeeTrackingSolution;