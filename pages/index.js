import React from 'react';
import NavbarStyleTwo from "@/components/_App/NavbarStyleTwo";
import MainBanner from "@/components/Index/MainBanner";
import TopFeatures from '@/components/Index/TopFeatures';
import OurFeatures from '@/components/Index/OurFeatures';
import PricingStyleFour from '@/components/PricingPlans/PricingStyleFour';
import Partner from "@/components/Common/Partner";
import OurSolutions from '@/components/Index/OurSolutions';
import FAQ from '@/components/Index/Faq';
import CTA from '@/components/Common/CTA';
import Footer from "@/components/_App/Footer";

const Index = () => {
    return (
        <>
            <NavbarStyleTwo />
            <MainBanner />
            <TopFeatures />
            <OurFeatures />
            <PricingStyleFour />
            <OurSolutions />
            <FAQ />
            <div className="pb-80">
                <Partner />
            </div>
            <CTA />
            <Footer />
        </>
    )
}

export default Index;