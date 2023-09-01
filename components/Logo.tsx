import Image from "next/image";
import ButtonNavMobile from "./ButtonNavMobile";

const Logo = () => {

    return (
        <div className="flex justify-center">
            <div>
                <ButtonNavMobile />
            </div>
            <div className="bg-logo-maeztra bg-cover w-full min-w-[110px] h-4 self-center ml-3">
            </div>
        </div>

    );
}

export default Logo;