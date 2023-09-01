import { GiAmpleDress } from "react-icons/gi";
import { isMobile } from 'react-device-detect';

const Navbar = () => {
    const shouldHideUlOnMobile = isMobile;

    return (
        <div className="fixed top-[88px] z-50 bg-white w-full left-0 md:relative md:top-0 md:container md:mx-auto" >
            <ul className={`py-3 hidden md:flex flex-col md:flex-row gap-4 md:justify-between md:items-start ${shouldHideUlOnMobile ? 'hidden' : ''}`}>
                <li className="hover:text-primary hover:font-bold"><a href="" className="flex md:justify-start items-center justify-center gap-2 text-sm"><GiAmpleDress/><span className="text-primary">Novidades</span></a></li>
                <li className="hover:text-primary hover:font-bold"><a href="" className="flex md:justify-start items-center justify-center gap-2 text-sm">Vestidos</a></li>
                <li className="hover:text-primary hover:font-bold"><a href="" className="flex md:justify-start items-center justify-center gap-2 text-sm">Roupas</a></li>
                <li className="hover:text-primary hover:font-bold"><a href="" className="flex md:justify-start items-center justify-center gap-2 text-sm">Sapatos</a></li>
                <li className="hover:text-primary hover:font-bold"><a href="" className="flex md:justify-start items-center justify-center gap-2 text-sm">Lingerie</a></li>
                <li className="hover:text-primary hover:font-bold"><a href="" className="flex md:justify-start items-center justify-center gap-2 text-sm">Lingerie</a></li>
                <li className="hover:text-primary hover:font-bold"><a href="" className="flex md:justify-start items-center justify-center gap-2 text-sm">OUTLET</a></li>
            </ul>
        </div>
    );
}

export default Navbar;
