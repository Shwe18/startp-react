import React from 'react';
import NavbarStyleFive from "@/components/_App/NavbarStyleFive";
import MainBanner from "@/components/CloudTelephony/MainBanner";
import WhatWeOffer from '@/components/CloudTelephony/WhatWeOffer';
import AboutUsContent from '@/components/CloudTelephony/AboutUsContent';
import OurServices from '@/components/CloudTelephony/OurServices';
import DigitalAgencyFunFacts from '@/components/CloudTelephony/DigitalAgencyFunFacts';
import Projects from '@/components/CloudTelephony/Projects';
import PricingStyleThree from '@/components/PricingPlans/PricingStyleThree';
import FeedbackStyleThree from '@/components/Common/FeedbackStyleThree';
import BlogPostStyleTwo from '@/components/Common/BlogPostStyleTwo';
import CTAStyleTwo from '@/components/Common/CTAStyleTwo';
import Footer from "@/components/_App/Footer";

const CloudTelephony = () => {
    return (
        <>
            <NavbarStyleFive />
            <MainBanner />
            <WhatWeOffer />
            <AboutUsContent />
            <OurServices />
            <DigitalAgencyFunFacts />
            <Projects />
            <PricingStyleThree />
            <FeedbackStyleThree />
            <BlogPostStyleTwo />
            <CTAStyleTwo />
            <Footer />
        </>
    )
}

export default CloudTelephony;