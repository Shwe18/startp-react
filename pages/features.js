import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from "@/components/Features/MainBanner";
import ServicesArea from "@/components/Features/ServicesArea";
import SingleFeatures from '@/components/Features/SingleFeatures';
import VirtualNumberWorks from "@/components/Features/VirtualNumberWorks";
import Partners from '@/components/Features/Partners';
import SliderVirtual from "@/components/Features/slidervirtual";
import CTAStyleTwo from '@/components/Features/CTAStyleTwo';
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';





const Features = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Features" />
            

            <MainBanner />
            <ServicesArea />
            <SingleFeatures />
            <VirtualNumberWorks />
            <Partners /> 
            <SliderVirtual />      
            <CTAStyleTwo />
            <Footer />

           
 
           
        </>
    )
}

export default Features;