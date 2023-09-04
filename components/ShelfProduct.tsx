"use client";
import SliderProducts from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const ShelfProduct = () => {

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1441,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 769,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="container mt-20 mb-6 md:mx-auto">
            <h2 className="text-3xl font-bold not-italic text-center mb-3"> As Mais Pedidas </h2>
            <SliderProducts {...settings}>

                <div>
                    <div className="flex flex-col px-4">
                        <Image className="mx-auto rounded-sm" src="./produto01.png" alt="Logo da empresa Maeztra" width={308} height={465} />
                    </div>
                    <div className="w-56 mx-auto mt-2 flex flex-col gap-2 justify-start">
                        <Image className="" src="./produtocores1.png" alt="Logo da empresa Maeztra" width={132} height={27} />
                        <p className="text-slate-700 text-xl font-bold">R$ 500,00</p>
                        <p className="text-slate-700 text-base">Faux Suede Mini Skirt</p>
                        <p className="text-slate-700/50 text-xs">A faux suede mini skirt featuring exposed button-front closures and panel seam construction.</p>
                        <button className="bg-primary text-white w-full h-9 rounded-lg">Adicionar</button>
                    </div>
                </div>

                <div>
                    <div className="flex flex-col px-4">
                        <Image className="mx-auto rounded-sm" src="./produto01.png" alt="Logo da empresa Maeztra" width={308} height={465} />
                    </div>
                    <div className="w-56 mx-auto mt-2 flex flex-col gap-2 justify-start">
                        <Image className="" src="./produtocores1.png" alt="Logo da empresa Maeztra" width={132} height={27} />
                        <p className="text-slate-700 text-xl font-bold">R$ 500,00</p>
                        <p className="text-slate-700 text-base">Faux Suede Mini Skirt</p>
                        <p className="text-slate-700/50 text-xs">A faux suede mini skirt featuring exposed button-front closures and panel seam construction.</p>
                        <button className="bg-primary text-white w-full h-9 rounded-lg">Adicionar</button>
                    </div>
                </div>

                <div>
                    <div className="flex flex-col px-4">
                        <Image className="mx-auto rounded-sm" src="./produto01.png" alt="Logo da empresa Maeztra" width={308} height={465} />
                    </div>
                    <div className="w-56 mx-auto mt-2 flex flex-col gap-2 justify-start">
                        <Image className="" src="./produtocores1.png" alt="Logo da empresa Maeztra" width={132} height={27} />
                        <p className="text-slate-700 text-xl font-bold">R$ 500,00</p>
                        <p className="text-slate-700 text-base">Faux Suede Mini Skirt</p>
                        <p className="text-slate-700/50 text-xs">A faux suede mini skirt featuring exposed button-front closures and panel seam construction.</p>
                        <button className="bg-primary text-white w-full h-9 rounded-lg">Adicionar</button>
                    </div>
                </div>

                <div>
                    <div className="flex flex-col px-4">
                        <Image className="mx-auto rounded-sm" src="./produto01.png" alt="Logo da empresa Maeztra" width={308} height={465} />
                    </div>
                    <div className="w-56 mx-auto mt-2 flex flex-col gap-2 justify-start">
                        <Image className="" src="./produtocores1.png" alt="Logo da empresa Maeztra" width={132} height={27} />
                        <p className="text-slate-700 text-xl font-bold">R$ 500,00</p>
                        <p className="text-slate-700 text-base">Faux Suede Mini Skirt</p>
                        <p className="text-slate-700/50 text-xs">A faux suede mini skirt featuring exposed button-front closures and panel seam construction.</p>
                        <button className="bg-primary text-white w-full h-9 rounded-lg">Adicionar</button>
                    </div>
                </div>

                <div>
                    <div className="flex flex-col px-4">
                        <Image className="mx-auto rounded-sm" src="./produto01.png" alt="Logo da empresa Maeztra" width={308} height={465} />
                    </div>
                    <div className="w-56 mx-auto mt-2 flex flex-col gap-2 justify-start">
                        <Image className="" src="./produtocores1.png" alt="Logo da empresa Maeztra" width={132} height={27} />
                        <p className="text-slate-700 text-xl font-bold">R$ 500,00</p>
                        <p className="text-slate-700 text-base">Faux Suede Mini Skirt</p>
                        <p className="text-slate-700/50 text-xs">A faux suede mini skirt featuring exposed button-front closures and panel seam construction.</p>
                        <button className="bg-primary text-white w-full h-9 rounded-lg">Adicionar</button>
                    </div>
                </div>





            </SliderProducts>
        </div>
    );
}
export default ShelfProduct