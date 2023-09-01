import React from "react";
import SearchNewsletter from "./SearchNewsletter";

const Newsletter = () => {
    return ( 
        <div className="container mx-auto flex py-10">
            <div className="flex flex-col items-center mx-auto md:flex-row md:gap-6">
                <h3>Recebe Nossa Newsletter</h3>
                <SearchNewsletter />
            </div>
        </div>
     );
}
 
export default Newsletter;