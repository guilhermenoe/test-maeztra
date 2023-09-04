import { SiVtex } from "react-icons/si";
import Image from "next/image";
const PoweredBy = () => {
    return (
        <div className="container flex items-center px-8 mx-auto justify-center gap-6 bg-black h-12">
            <div>
                <p className="text-white text-xs">Powered by</p>
                <a href="https://vtex.com/br-pt/overview-plataforma/"><SiVtex size={32} color="white" /></a>
            </div>
            <div>
                <p className="text-white text-xs">Developed by</p>
                <a href="https://maeztra.com/" target="_blank" rel="noopener noreferrer">
                    <Image src="./maeztra-Logo-footer.svg" alt="Logo da empresa Maeztra" width={80} height={40} />
                </a>
            </div>
        </div>
    );
}

export default PoweredBy;