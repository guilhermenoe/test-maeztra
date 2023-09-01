import FooterLinks from './FooterLinks';
import Payments from './Payments';
import PoweredBy from './PoweredBy';
import SocialMedias from './SocialMedias';

const Footer = () => {
    return (
        <>
        <footer >
            <FooterLinks />
            <div className="bg-black py-6 px-8 w-full md:flex md:mx-auto md:h-12 md:py-0 md:px-0">
                <SocialMedias />
                <Payments />
                <PoweredBy />
            </div>
        </footer>
        </>
    )

};

export default Footer;
