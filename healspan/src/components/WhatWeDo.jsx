import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import what from "../assets/what.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";

const WhatWeDo = () => {
    const data = [
        {
            title: 'Empanelment',
            description: 'We provide empanelment support for hospitals with 20 beds or more with leading insurance networks. We take care of preparing the paperwork, documentation, follow ups and any required registrations.',
            image: what
        },
        {
            title: "Documentation",
            description: "We ensure that the documents that go to the TPA are comprehensive, correct and complete the first time around . We also anticipate queries for you and include relevant documents for that too!",
            image: img2
        },
        {
            title: "Claims Tracking",
            description: "In addition to staying on top of your outstanding claims, we also share key reports and insights with you on a regular basis - helping improve the process and reducing the settlement turnaround time even further.",
            image: img3
        },
        {
            title: "Claims & Queries support",
            description: "We coordinate with all TPAs on your behalf to ensure speedy processing of claims by resolving queries at the earliest. We also support you during any claim investigation.",
            image: img4
        },
        {
            title: "Financial Support",
            description: "We also collaborate with specialised financial institutions to provide you advances against the pending claims so that your cashflow cycle is reduced even further, and you have access to more working capital!",
            image: img5
        }
    ];

    const scrollToWhatWeDo = () => {
        scroll.scrollTo('whatwedo', {
            duration: 800,
            smooth: 'easeInOutQuart',
        });
    };

    return (
        <div>
            <div name='whatwedo' className="flex flex-col justify-center items-center mt-10 md:mt-16 bg-[#f0eeee] p-4 pb-8 md:pb-16">
                <h1 className=' text-[24px] md:text-[45px] font-bold font-sans mb-4 md:mb-8'>What We Do</h1>

                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={1000}
                    centerMode={false}
                    containerClass="container"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 1,
                            partialVisibilityGutter: 40
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                        }
                    }}
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                >
                    {data.map((item, index) => {
                        return (
                            <div key={index} className="flex flex-col md:flex-row items-center md:justify-between w-full mx-auto rounded-md mt-4 p-4 md:p-8 bg-gradient-to-tr from-blue-900 via-blue-700 to-sky-500 md:w-[80vw] md:mt-[70px] md:pl-[60px] md:gap-[50px] md:pr-[60px]">

                                <div className="flex justify-between items-center mb-4 md:mb-0 rounded-md md:rounded-md ">
                                    <img src={item.image} className="w-full  md:w-[400px]  p-8 md:p-8 rounded-md md:rounded-md" alt={item.title}></img>
                                </div>
                                <div className="flex flex-col gap-4 w-full md:gap-[30px] md:w-[600px] text-white">
                                    <h1 className="text-[22px] text-center md:text-3xl font-semibold md:text-start">{item.title}</h1>
                                    <p className=" text-lg md:text-xl">{item.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </Carousel>
            </div>

            <div className="flex justify-center items-center mt-16 mb-16 p-5 md:p-9 ">
                <iframe width="100%" height="565" src="https://www.youtube.com/embed/4-pfpf0wAGI?si=JBkUt3FBV6iwSgxW" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        </div>
    );
};

export default WhatWeDo;
