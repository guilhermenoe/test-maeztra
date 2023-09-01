import { FaCcVisa, FaCcMastercard } from "react-icons/fa";

const Payments = () => {
    return ( 
        <div className="container flex items-center px-8 mx-auto justify-center gap-6 bg-black h-12">
            <div>
                <a href="https://www.facebook.com/maeztra"><FaCcVisa size={32} color="white" /></a>
            </div>
            <div>
                <a href="http://www.linkedin.com/company/maeztra" target="_blank" rel="noopener noreferrer"><FaCcMastercard size={32} color="white"/></a>
            </div>
            <div>
                <a href="http://www.instagram.com/maeztra" target="_blank" rel="noopener noreferrer"><FaCcVisa size={32} color="white"/></a>
            </div>
            <div>
                <a href="http://www.youtube.com/maeztra" target="_blank" rel="noopener noreferrer"><FaCcMastercard size={32} color="white"/></a>
            </div>
        </div>
     );
}
 
export default Payments;