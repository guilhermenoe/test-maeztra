"use client";
import SliderBrands from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Brands = () => {
    var settings = {
        dots: false,
        infinite: false,
        arrows: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1441,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    arrows: false,
                    dots: false

                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="container mt-10 md:mx-auto">
            <h2 className="text-3xl font-bold not-italic text-center mb-3"> Marcas Parceiras </h2>
            <SliderBrands {...settings}>
                <div>
                    <div className="flex gap-5 h-16 bg-slate-200 items-center justify-center w-72 mx-auto rounded-lg">
                        <div>
                            <Image src="./comma.png" alt="Logo da marca Comma" width={308} height={64} />
                        </div>
                    </div>

                </div>
                <div>

                    <div className="flex gap-5 h-16 bg-slate-200 items-center justify-center w-72 mx-auto rounded-lg">
                        <div>
                            <Image src="./melissa.png" alt="Logo da marca Melissa" width={308} height={64} />
                        </div>
                    </div>
                </div>

                <div>

                    <div className="flex gap-5 h-16 bg-slate-200 items-center justify-center w-72 mx-auto rounded-lg">
                        <div>
                            <Image src="./forever.png" alt="Logo da marca Forever" width={308} height={64} />
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex gap-5 h-16 bg-slate-200 items-center justify-center w-72 mx-auto rounded-lg">
                        <div>
                            <Image src="./zara.png" alt="Logo da marca Zara" width={308} height={64} />
                        </div>
                    </div>

                </div>

                <div>
                    <div className="flex gap-5 h-16 bg-slate-200 items-center justify-center w-72 mx-auto rounded-lg">
                        <div>
                            <Image src="./taylor.png" alt="Logo da marca Taylor" width={308} height={64} />
                        </div>
                    </div>

                </div>
            </SliderBrands>
        </div>
    );
}
export default Brands;