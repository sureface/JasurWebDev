import {SearchBar} from "./SearchBar";
import Image from "next/image";
import Link from "next/link";

export function Countries(){
    return (
        <div>
            <div className="container mx-auto">
                <section className="pt-10">
                    <SearchBar />
                </section>

                <section className="py-16">
                    <div className="grid grid-cols-4 gap-y-10 gap-x-6">
                        <Link href="/avgoniston">
                            <a>
                                <div className="card-animation max-w-sm rounded-lg overflow-hidden shadow-lg transition transform hover:-translate-y-4 motion-reduce:transition-none motion-reduce:hover:transform-none">
                                    <div className="animate">
                                        <Image width="500" height="350" src="/image.jpg" alt="Sunset in the mountains"/>
                                    </div>
                                    <div className="px-6 py-4">
                                        <h3 className="font-bold text-xl mb-2 leading-normal text-center">The Coldest Sunset</h3>
                                        <div className="grid grid-cols-2 gap-3 capitalize">
                                            <p>region:</p>
                                            <p className="text-right">somewhere</p>
                                            <p>something</p>
                                            <p className="text-right">somewhere</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    )
}