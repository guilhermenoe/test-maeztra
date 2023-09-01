"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const NewCollection = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 768);
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="container px-8 py-10 flex flex-col gap-4 md:flex-row mx-auto">
            <div className="flex flex-col gap-4">
                <h2 className="text-black text-2xl font-bold not-italic">Lorem ipsum </h2>
                <p className="text-sm not-italic text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer. Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet luctus ut vulputate scelerisque .</p>
            </div>
            <div className="w-full max-w-[1140px] h-48 bg-new-collection-mobile md:bg-new-collection-desktop bg-cover">

            </div>
        </div>
    );
}

export default NewCollection;