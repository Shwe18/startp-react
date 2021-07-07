import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from '@/components/InteractiveVoiceResponse/MainBanner';
import PartnerStyleTwo from '@/components/Common/PartnerStyleTwo';
import AboutUsContent from '@/components/InteractiveVoiceResponse/AboutUsContent';
import Services from '@/components/InteractiveVoiceResponse/Services';
import CTA from '@/components/InteractiveVoiceResponse/CTA';
import FunFactsArea from '@/components/Common/FunFactsArea';
import Team from '@/components/InteractiveVoiceResponse/Team';
import Feedback from '@/components/Common/Feedback';
import WhyChoose from '@/components/InteractiveVoiceResponse/WhyChoose';
import BlogPost from '@/components/Common/BlogPost';
import Footer from "@/components/_App/Footer";

const PCRepair = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <PartnerStyleTwo />
            <AboutUsContent />
            <Services />
            <CTA />
            <FunFactsArea />
            <Team />
            <Feedback />
            <WhyChoose />
            <BlogPost />
            <Footer />
        </>
    )
}

export default PCRepair;