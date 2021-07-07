import React from 'react';
import NavbarStyleFour from "@/components/_App/NavbarStyleFour";
import MainBanner from '@/components/VirtualNumber/MainBanner';
import WhatWeDo from '@/components/VirtualNumber/WhatWeDo';
import DiscoverArea from '@/components/VirtualNumber/DiscoverArea';
import Services from '@/components/VirtualNumber/Services';
import TeamStyleTwo from '@/components/Common/TeamStyleTwo';
import BigdataFunFacts from '@/components/VirtualNumber/BigdataFunFacts';
import Feedback from '@/components/VirtualNumber/Feedback';
import IndustriesWeServe from '@/components/VirtualNumber/IndustriesWeServe';
import BlogPost from '@/components/VirtualNumber/BlogPost';
import NewsletterStyleTwo from '@/components/Common/NewsletterStyleTwo';
import Footer from "@/components/_App/Footer";

const VirtualNumber = () => {
    return (
        <>
            <NavbarStyleFour />
            <MainBanner />
            <WhatWeDo />
            <DiscoverArea />
            <Services />
            <TeamStyleTwo />
            <BigdataFunFacts />
            <Feedback />
            <IndustriesWeServe />
            <BlogPost />
            <NewsletterStyleTwo />
            <Footer />
        </>
    )
}

export default VirtualNumber;