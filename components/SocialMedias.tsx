import { AiFillFacebook, AiFillLinkedin, AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";


const SocialMedias = () => {

    return ( 
        <div className="container flex items-center px-8 mx-auto justify-center gap-6 bg-black h-12">
            <div>
                <a href="https://www.facebook.com/maeztra"><AiFillFacebook size={32} color="white" /></a>
            </div>
            <div>
                <a href="http://www.linkedin.com/company/maeztra" target="_blank" rel="noopener noreferrer"><AiFillLinkedin size={32} color="white"/></a>
            </div>
            <div>
                <a href="http://www.instagram.com/maeztra" target="_blank" rel="noopener noreferrer"><AiOutlineInstagram size={32} color="white"/></a>
            </div>
            <div>
                <a href="http://www.youtube.com/maeztra" target="_blank" rel="noopener noreferrer"><AiFillYoutube size={32} color="white"/></a>
            </div>
        </div>
     );
}
 
export default SocialMedias;