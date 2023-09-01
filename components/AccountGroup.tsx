import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { LiaShoppingBagSolid } from "react-icons/lia";


const AccountGroup: React.FC = () => {

    return (
        <div className="flex gap-6">
            <button className="whitespace-nowrap py-3 md:px-4 px-0 rounded-lg border border-transparent flex items-center gap-2">
                <FaRegUser size={18} />
                <span className="hidden md:block">Minha conta </span>
            </button>
            <button className="py-3 pl-0 pr-4 md:px-4 rounded-lg border border-transparent flex items-center gap-2">
                <FaRegHeart size={18} />
                <span className="hidden md:block">Favoritos </span>
            </button>
            <button className="whitespace-nowrap py-3 px-4 rounded-lg border border-primary hidden md:flex items-center gap-2">
                <LiaShoppingBagSolid size={18} />
                <span>Meu Carrinho </span>
            </button>
        </div>
    );
}

export default AccountGroup;