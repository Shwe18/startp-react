import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: false,
    nav: false,
    smartSpeed: 1000,
    autoplayTimeout: 5000,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    items: 1,
};

const SliderVirtual = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="agency-portfolio-feedback-area ptb-80">
            <div className="container">
                <div className="" style={{Border: "1px"}}>
                {display ? <OwlCarousel 
                    className="agency-portfolio-feedback-slides owl-carousel owl-theme"
                    {...options}
                > 

                  
                   
                    <div className="agency-portfolio-feedback-item1">
                       <p>With IVR, we have been able to efficiently transfer calls to right agent, So that basic but important queries are efficiently handled</p>
                       <div className="text-center" style={{backgroundColor: "Pink"}}>
                            <p>Amit Singla<br /> Director, Tourist Asia</p>
                        </div>
                    </div>

                    <div className="agency-portfolio-feedback-item2">
                        <p >With IVR/Missed Call Service, We increased the efficiency of receiving the calls and monitor them. Our business conversion get increased by giving the feedback for their customer interaction</p>
                        <div className="text-center" style={{backgroundColor: "DarkSlateGray"}}>
                            <p>Shriram<br /> Director, Simplified Learning</p>
                        </div>
                    </div>

                    <div className="agency-portfolio-feedback-item3">
                        <p >With Toll free, We increased the sales inquiry for our product. Customer is also happy to call on TOll free number wherein he's not been charged from telecom companies for the call when they areb speaking to us for query or service support.</p>
                         <div className="text-center" style={{backgroundColor: "#566D7E"}}>
                         <p>Michael Nazareth<br />Director, Allianz Health</p>
                        </div>
                    </div>
               
                </OwlCarousel> : ''}
                </div>
            </div>
        </div>
     
    )
}

export default SliderVirtual;