import AccountGroup from "./AccountGroup";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Search from "./Search";


const Header = () => {
    return (
        <div className="container mx-auto px-4">
            <header className="flex justify-between items-center container mx-auto py-6 gap-4">
                <Logo />
                <Search />
                <AccountGroup />
            </header>
            <Navbar />
        </div>
    );
}

export default Header;