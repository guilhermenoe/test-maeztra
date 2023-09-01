"use client";
import React, { useState } from 'react';

const FooterLinks = () => {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);

    const toggleSection1 = () => {
        setIsOpen1(!isOpen1)
    };

    const toggleSection2 = () => {
        setIsOpen2(!isOpen2);
    };

    const toggleSection3 = () => {
        setIsOpen3(!isOpen3);
    };

    return (
        <div className="bg-white text-slate-700 py-6 px-8 container mx-auto mb-16">
            <div className="container mx-auto flex flex-wrap justify-between md:text-center">
                <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
                    <h3
                        className="text-lg text-slate-700 font-bold mb-3 cursor-pointer"
                        onClick={toggleSection1}
                    >
                        
                        Informações <span className="inline-block md:hidden">{isOpen1 ? '-' : '+'}</span>
                    </h3>
                        <ul className={` ${isOpen1 ? 'flex' : 'hidden'} md:flex flex-col gap-6`}>
                            <li className='text-black text-xs'>Quem Somos</li>
                            <li className='text-black text-xs'>Prazo de Envio</li>
                            <li className='text-black text-xs'>Trocas e Devoluções</li>
                            <li className='text-black text-xs'>Promoções e Cupons</li>
                        </ul>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
                    <h3
                        className="text-lg text-slate-700 font-bold mb-3 cursor-pointer"
                        onClick={toggleSection2}
                    >
                        
                        Minha Conta <span className="inline-block md:hidden">{isOpen2 ? '-' : '+'}</span>
                    </h3>
                        <ul className={` ${isOpen2 ? 'flex' : 'hidden'} md:flex flex-col gap-6`}>
                            <li className='text-black text-xs'>Minha Conta</li>
                            <li className='text-black text-xs'>Meus Pedidos</li>
                            <li className='text-black text-xs'>Cadastre-se</li>
                        </ul>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3">
                    <h3
                        className="text-lg text-slate-700 font-bold mb-3 cursor-pointer"
                        onClick={toggleSection3}
                    >
                        Onde nos Encontrar <span className="inline-block md:hidden">{isOpen3 ? '-' : '+'}</span>
                    </h3>
                        <ul className={` ${isOpen3 ? 'flex' : 'hidden'} md:flex flex-col gap-6`}>
                            <li className='text-black text-xs'>Lojas</li>
                            <li className='text-black text-xs'>Endereço</li>
                        </ul>
                </div>
            </div>
        </div>
    );
};

export default FooterLinks;
