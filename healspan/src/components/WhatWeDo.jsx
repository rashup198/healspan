import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import what from "../assets/what.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"
import img5 from "../assets/img5.png"

const WhatWeDo = () => {
    const data = [
        {
            title: 'Empanelment',
            description: 'We provide empanelment support for hospitals with 20 beds or more with leading insurance networks. We take care of preparing the paperwork, documentation, follow ups and any required registrations.',
            image : what
        },
        {
            title:"Documentation",
            description:"We ensure that the documents that go to the TPA are comprehensive, correct and complete the first time around . We also anticipate queries for you and include relevant documents for that too!",
            image : img2
        },
        {
            title:"Claims Tracking",
            description:"In addition to staying on top of your outstanding claims, we also share key reports and insights with you on a regular basis - helping improve the process and reducing the settlement turnaround time even further.",
            image : img3
        },
        {
            title:"Claims & Queries support",
            description:"We coordinate with all TPAs on your behalf to ensure speedy processing of claims by resolving queries at the earliest. We also support you during any claim investigation.",
            image : img4
        },
        {
            title:"Financial Support",
            description:"We also collaborate with specialised financial institutions to provide you advances against the pending claims so that your cashflow cycle is reduced even further, and you have access to more working capital!",
            image : img5
        }
    ]
  return (
    <div>
      <div className=" flex flex-col justify-center items-center mt-[60px] bg-[#f0eeee] pb-[40px]">
        <h1 className=' text-[55px] text-[#050505] font-bold font-sans '>What We Do</h1>

        <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={1000}
            centerMode={false}
            className=""
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
                    <div className="flex justify-between bg-gradient-to-tr from-blue-900 via-blue-700 to-sky-500 items-center  w-[1200px] mx-auto rounded-md mt-[70px] pl-[10px] pr-[10px]">
                        
                        <div className="flex justify-center items-center">
                            <img src={item.image} className="w-[400px] p-8 bo "></img>
                        </div>
                        <div className="flex flex-col gap-[30px]  w-[600px] text-white">
                            <h1 className="text-[45px] font-semibold text-start">{item.title}</h1>
                            <p className="text-[20px]">{item.description}</p>
                        </div>   
                    </div>
                )
            })}
        </Carousel>
      </div>
      <div className=" flex justify-center items-center mt-[100px]">
      <iframe width="1160" height="615" src="https://www.youtube.com/embed/4-pfpf0wAGI?si=JBkUt3FBV6iwSgxW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  )
}
export default WhatWeDo