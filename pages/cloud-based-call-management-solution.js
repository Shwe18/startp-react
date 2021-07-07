import React from 'react';
import NavbarStyleSix from "@/components/_App/NavbarStyleSix";
import MainBanner from '@/components/IVRServiceProvider/MainBanner';
import Projects from '@/components/IVRServiceProvider/Projects';
import AboutUsContent from '@/components/IVRServiceProvider/AboutUsContent';
import FeedbackStyleFive from '@/components/Common/FeedbackStyleFive';
import Partner from '@/components/IVRServiceProvider/Partner';
import BlogPostStyleThree from '@/components/Common/BlogPostStyleThree';
import CreativeArea from '@/components/IVRServiceProvider/CreativeArea';
import Footer from "@/components/_App/Footer";

const CloudBasedCallManagementSolution = () => {
    return (
        <>
            <NavbarStyleSix />
            <MainBanner />
            <Projects />
            <AboutUsContent />
            <FeedbackStyleFive />
            <Partner />
            <BlogPostStyleThree />
            <CreativeArea />
            <Footer />
        </>
    )
}

export default CloudBasedCallManagementSolution;