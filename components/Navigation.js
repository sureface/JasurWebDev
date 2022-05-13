import React, {useEffect, useState} from "react";

export function Navigation() {


    const [scrollDown, setScrollDown] = useState(false);

    const scrollHandler = () => {
        if (window.scrollY > 10){
            setScrollDown(true);
        } else {
            setScrollDown(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);

        return () => window.removeEventListener('scroll', scrollHandler);
    },[])

    return(
        <header className={scrollDown === true ? "w-full backdrop-filter backdrop-blur-md bg-white/50 fixed z-10 trasition ease-in-out duration-500 shadow-xl": "w-full backdrop-filter backdrop-blur-lg bg-white/50 fixed z-10 trasition ease-in-out duration-500"}>
            <div className="container mx-auto">
                <div className={scrollDown === true ? "flex py-5 items-center justify-between trasition ease-in-out duration-500" : "flex py-10 items-center justify-between trasition ease-in-out duration-500"}>
                    <a href="#" className="text-xl font-bold tracking-tighter text-indigo-400 pr-8">Jasur</a>
                    <nav>
                        <ul className="flex items-center justify-start">
                            <li>
                                <a href="#" className="px-2 lg:px-6 py-6 text-md border-b-2 border-transparent hover:border-indigo-400 leading-[22px] md:px-3 text-gray-400 hover:text-indigo-500">Home</a>
                            </li>
                            <li>
                                <a href="#" className="px-2 lg:px-6 py-6 text-md border-b-2 border-transparent hover:border-indigo-400 leading-[22px] md:px-3 text-gray-400 hover:text-indigo-500">Home</a>
                            </li>
                            <li>
                                <a href="#" className="px-2 lg:px-6 py-6 text-md border-b-2 border-transparent hover:border-indigo-400 leading-[22px] md:px-3 text-gray-400 hover:text-indigo-500">Home</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}