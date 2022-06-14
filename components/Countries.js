import React, {useState, useEffect} from 'react';
import Image from "next/image";
import Link from "next/link";
import {Loading} from "./Loading";
import {Search} from "./Search";

export function Countries({data: serverData}){

    const [country, setCountries] = useState(serverData);
    const [loadMore, setLoadMore] = useState(8);
    const [filtered, setFiltered] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    const loadData = () => {
        setLoadMore(loadMore + 8)
    }

    const loadOnScroll = () => {
        if (window.scrollY + window.innerHeight >= document.body.offsetHeight - 100){
            loadData();
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', loadOnScroll);
        return () => window.removeEventListener('scroll', loadOnScroll);
    }, [loadMore]);

    useEffect(() => {
        async function getCountries() {
            const res =  await fetch(`https://restcountries.com/v2/all`)
            const json = await res.json()
            const data = json
            setCountries(data)
        }
        if (!serverData){
            getCountries()
        }
    }, []);


    if (!country) {
        return <>
            <Loading />
        </>
    }

    const searchCountries = (searchValue) => {
        setSearchInput(searchValue);

        if (searchInput){
            const filteredCountries = country.filter((item) => (
                Object.values(item).join("").toLowerCase().includes(searchValue.toLowerCase())
            ))
            setFiltered(filteredCountries)
        } else {
            setFiltered(country)
        }
    }

    return (
        <div>
            <div className="container mx-auto px-3">
                <section className="pt-10">
                    <Search
                        searchCountries={searchCountries}
                        searchInput={searchInput}
                    />
                </section>

                {
                    searchInput.length > 0 ?
                        <section className="py-16">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-6">
                                {
                                    filtered.slice(0, loadMore).map((item, index) => {
                                        return (
                                            <Link href={`/${item.name.replace(/\s+/g, "-")}`} key={index}>
                                                <a className="flex items-center justify-center">
                                                    <div className="card-animation max-w-sm bg-zinc-50 rounded-lg overflow-hidden shadow-lg transition transform hover:-translate-y-4 motion-reduce:transition-none motion-reduce:hover:transform-none">
                                                        <div className="animate">
                                                            <Image width="500" height="350" src={item.flags.svg} alt="error image"/>
                                                        </div>
                                                        <div className="px-6 py-4">
                                                            <h3 className="font-bold text-xl mb-2 leading-normal text-center">{item.name}</h3>
                                                            <div className="flex flex-col capitalize ">
                                                                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                                                                    <div>region:</div>
                                                                    <div className="text-right">{item.region}</div>
                                                                </div>
                                                                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                                                                    <div>capital:</div>
                                                                    <div className="text-right">{item.capital}</div>
                                                                </div>
                                                                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                                                                    <div>subregion:</div>
                                                                    <div className="text-right">{item.subregion}</div>
                                                                </div>
                                                                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                                                                    <div>population:</div>
                                                                    <div className="text-right">{item.population}</div>
                                                                </div>
                                                                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                                                                    <div>native name:</div>
                                                                    <div className="text-right">{item.nativeName}</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </section> :
                        <section className="py-16">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-6">
                                {
                                    country.slice(0, loadMore).map((item, index) => {
                                        return (
                                            <Link href={`/${item.name.replace(/\s+/g, "-")}`} key={index}>
                                                <a className="flex items-center justify-center">
                                                    <div className="card-animation max-w-sm bg-zinc-50 rounded-lg overflow-hidden shadow-lg transition transform hover:-translate-y-4 motion-reduce:transition-none motion-reduce:hover:transform-none">
                                                        <div className="animate">
                                                            <Image width="500" height="350" src={item.flags.svg} alt="error image"/>
                                                        </div>
                                                        <div className="px-6 py-4">
                                                            <h3 className="font-bold text-xl mb-2 leading-normal text-center">{item.name}</h3>
                                                            <div className="flex flex-col capitalize ">
                                                                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                                                                    <div>region:</div>
                                                                    <div className="text-right">{item.region}</div>
                                                                </div>
                                                                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                                                                    <div>capital:</div>
                                                                    <div className="text-right">{item.capital}</div>
                                                                </div>
                                                                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                                                                    <div>subregion:</div>
                                                                    <div className="text-right">{item.subregion}</div>
                                                                </div>
                                                                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                                                                    <div>population:</div>
                                                                    <div className="text-right">{item.population}</div>
                                                                </div>
                                                                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                                                                    <div>native name:</div>
                                                                    <div className="text-right">{item.nativeName}</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </section>
                }
            </div>
        </div>
    )
}

Countries.getInitialProps = async ({ req } ) => {
    if (!req){
        return { data: null }
    }
    const res =  await fetch(`https://restcountries.com/v2/all`)
    const json = await res.json()
    const data = json
    console.log(data)

    return {
        data
    }
}