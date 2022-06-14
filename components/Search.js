import {useState, useEffect} from 'react'

export function Search({ searchCountries, searchInput }) {

    const region = [
        {
            name: "Americas"
        },
        {
            name: "Asia"
        },
        {
            name: "Europe"
        },
        {
            name: "Oceania"
        },
        {
            name: "Africa"
        },
    ]

    const fetchCountriesByRegion =  async (region) => {
        if (region) {
            const res = await fetch(`https://restcountries.com/v2/region/${region}`)
            const data = await res.json()
            console.log(data)
        }
    }
    useEffect(() => {
        fetchCountriesByRegion()
    }, [])

    return (
        <>
            <div className="md:flex items-center justify-between">
                <label className="w-2/5">
                    <input
                        type="search"
                        name="search"
                        id="search"
                        placeholder="Search Countries By Name..."
                        className="p-3 mb-3 md:mb-0 w-full rounded-md drop-shadow-md shadow-inner focus:outline-none hover:drop-shadow-lg transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
                        value={searchInput}
                        onChange={(e) => searchCountries(e.target.value)}
                    />
                </label>
                <label className="flex md:flex-row justify-center">
                    <select
                        name="select"
                        id="select"
                        className="p-3 rounded-md drop-shadow-md shadow-inner focus:outline-none hover:drop-shadow-lg transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
                        value={region.name}
                        onChange={(e => fetchCountriesByRegion(e.target.value))}
                    >
                        <option disabled={true} value="all">All</option>
                        <option value="Americas">Americas</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                        <option value="Africa">Africa</option>
                    </select>
                </label>
            </div>
        </>
    )
}