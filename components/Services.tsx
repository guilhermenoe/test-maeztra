"use client";
import SliderService from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Services = () => {

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
        <div className="container mt-6 md:mx-auto">
            <h2 className="text-base font-bold not-italic text-center mb-5"> Por que comprar na Maeztra? </h2>
            <SliderService {...settings}>
                <div>
                    <div className="flex gap-5 h-16 bg-slate-200 items-center justify-center w-72 mx-auto rounded-lg">
                        <div>
                            <Image src="/planeta.png" alt="Logo da empresa Maeztra" width={32} height={32} />
                        </div>
                        <div>
                            <p className="text-sm font-bold not-italic">Produtos importados</p>
                            <p className="text-sm not-italic text-black">Produto de Alta Qualidade</p>
                        </div>
                    </div>

                </div>
                <div>

                    <div className="flex gap-5 h-16 bg-slate-200 items-center justify-center w-72 mx-auto rounded-lg">
                        <div>
                            <Image src="/casa.png" alt="Logo da empresa Maeztra" width={32} height={32} />
                        </div>
                        <div>
                            <p className="text-sm font-bold not-italic">Estoque no Brazil</p>
                            <p className="text-sm not-italic text-black">Produtos mais perto de você!</p>
                        </div>
                    </div>
                </div>

                <div>

                    <div className="flex gap-5 h-16 bg-slate-200 items-center justify-center w-72 mx-auto rounded-lg">
                        <div>
                            <Image src="/caixa.png" alt="Logo da empresa Maeztra" width={32} height={32} />
                        </div>
                        <div>
                            <p className="text-sm font-bold not-italic">Trocas Garantidas</p>
                            <p className="text-sm not-italic text-black">Trocas em até 48 horas</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex gap-5 h-16 bg-slate-200 items-center justify-center w-72 mx-auto rounded-lg">
                        <div>
                            <Image src="/cupom.png" alt="Logo da empresa Maeztra" width={32} height={32} />
                        </div>
                        <div>
                            <p className="text-sm font-bold not-italic">Ganhe 5% off</p>
                            <p className="text-sm not-italic text-black">Pagando à vista no Cartão</p>
                        </div>
                    </div>

                </div>

                <div>
                    <div className="flex gap-5 h-16 bg-slate-200 items-center justify-center w-72 mx-auto rounded-lg">
                        <div>
                            <Image src="/caminhao.png" alt="Logo da empresa Maeztra" width={32} height={32} />
                        </div>
                        <div>
                            <p className="text-sm font-bold not-italic">Frete Grátis</p>
                            <p className="text-sm not-italic text-black">Em compras acima de R$ 499,00</p>
                        </div>
                    </div>

                </div>



            </SliderService>
        </div>
    );
}
export default Services;