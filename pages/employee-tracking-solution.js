import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from '@/components/ETS/MainBanner';
import Partner from '@/components/ETS/Partner';
import Features from '@/components/AudioConference/Features';
import Welcome from '@/components/ETS/Welcome';
import OurServices from '@/components/ETS/OurServices';
import FunFactsArea from '@/components/Common/FunFactsArea';
import AudioConferencePricing from '@/components/AudioConference/AudioConferencePricing';
//import Features from '@/components/ETS/Features';
import FeedbackStyleFour from '@/components/Common/FeedbackStyleFour';
import Newsletter from '@/components/Common/Newsletter';
import Footer from "@/components/_App/Footer";

const AudioConference = () => {
    return (
        <>
            <Navbar />
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
