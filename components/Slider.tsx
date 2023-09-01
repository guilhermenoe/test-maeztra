"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./Slider.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

function SimpleSlider() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick} className="absolute top-[50%] z-10 translate-[0_-50%] left-[5%]">
        <MdArrowBackIosNew size={32} />

      </div>
    );
  }

  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick} className="absolute top-[50%] z-10 translate-[0_-50%] right-[5%]">
        <MdArrowForwardIos size={32} />

      </div>
    );
  }
  

  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToScroll: 1
  };

  return (
    <div className="mx-auto w-full">
      <Slider {...settings}>
        <div className=" w-full relative bg-mulher-mobile bg-cover bg-right md:bg-mulher-desktop">
          <div className="px-4 text-start bottom-0 flex flex-col gap-5 min-h-[400px] justify-end mb-16 md:ml-28 md:mb-20">
            <h3 className="text-white text-4xl not-italic font-bold">
              Promoções de Outono
            </h3>
            <p className="text-white text-base not-italic">
              Confira os melhores looks para combinar com você nesse Outono
            </p>
            <button className="w-fit px-3 py-1 rounded-sm bg-primary text-white font-bold">
              Conferir
            </button>
          </div>
        </div>
        <div className=" w-full relative bg-mulher-mobile bg-cover bg-right md:bg-mulher-desktop">
          <div className="px-4 text-start bottom-0 flex flex-col gap-5 min-h-[400px] justify-end mb-16 md:ml-28 md:mb-20">
            <h3 className="text-white text-4xl not-italic font-bold">
              Promoções de Outono
            </h3>
            <p className="text-white text-base not-italic">
              Confira os melhores looks para combinar com você nesse Outono
            </p>
            <button className="w-fit px-3 py-1 rounded-sm bg-primary text-white font-bold">
              Conferir
            </button>
          </div>
        </div>

      </Slider>
    </div>
  );
}

export default SimpleSlider;
