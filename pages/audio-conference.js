import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from '@/components/AudioConference/MainBanner';
import Welcome from '@/components/AudioConference/Welcome';
import Partner from '@/components/ETS/Partner';
import OurServices from '@/components/AudioConference/OurServices';
import Features from '@/components/AudioConference/Features';
import AudioConferenceWorks from '@/components/AudioConference/AudioConferenceWorks';
import FunFactsArea from '@/components/Common/FunFactsArea';
import AudioConferencePricing from '@/components/AudioConference/AudioConferencePricing';
import Newsletter from '@/components/AudioConference/Newsletter';
import Footer from "@/components/_App/Footer";

const AudioConference = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <Welcome />
            <OurServices />
            <Features />
            <AudioConferenceWorks />
            <FunFactsArea />
            <AudioConferencePricing />
            <Partner />
            <Newsletter />
            <Footer />
        </>
    )
}

export default AudioConference;