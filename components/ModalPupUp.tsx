"use client";
import { PiEnvelopeSimpleLight } from "react-icons/pi";
import { useState, useEffect } from 'react';

const ModalPopUp = () => {
    const [showModal, setShowModal] = useState(true);

    const closeModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            closeModal();
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    const handleBackgroundClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    return (
        <>
            {showModal && (
                <div
                    className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                    onClick={handleBackgroundClick}
                >
                    <div className="bg-transparent rounded-lg shadow-lg md:min-w-[800px] pb-5">
                        <div className="flex justify-end">
                            <button
                                onClick={closeModal}
                                className="text-white hover:text-primary text-bold uppercase"
                            >
                                fechar
                            </button>
                        </div>
                        <div className="flex bg-white justify-center">
                            <div className="w-1/2 hidden md:block md:bg-image-popup bg-origin-border md:h-[500px] md:min-w-[400px] bg-left bg-contain bg-no-repeat">
                            </div>
                            <div className="w-1/2 h-auto p-4 text-center items-center self-center flex flex-col gap-3">
                                <span className="flex justify-center"><PiEnvelopeSimpleLight size={28}/></span>
                                <p className="text-gray-600 text-center text-xs uppercase ">Bem Vindo à MAEZTRA</p>
                                <h3 className="text-gray-700 text-xl">Receba em Primeira mão <br /><span className="font-bold">desconto e ofertas exclusivas</span></h3>
                                <input 
                                    type="text"
                                    placeholder="Digite seu e-mail"
                                    className="w-[320px] p-2 border rounded-xl border-gray-300"
                                />
                                <button className="w-[320px] mt-4 bg-primary text-white p-3 rounded-xl hover:bg-secondary text-xs font-bold uppercase">
                                    Enviar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ModalPopUp;
