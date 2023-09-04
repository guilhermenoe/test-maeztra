import { FaCcVisa, FaCcMastercard } from "react-icons/fa";

const Payments = () => {
    return ( 
        <div className="container flex items-center px-8 mx-auto justify-center gap-6 bg-black h-12">
            <div>
                <FaCcVisa size={32} color="white" />
            </div>
            <div>
                <FaCcMastercard size={32} color="white"/>
            </div>
            <div>
                <FaCcVisa size={32} color="white"/>
            </div>
            <div>
                <FaCcMastercard size={32} color="white"/>
            </div>
        </div>
     );
}
 
export default Payments;