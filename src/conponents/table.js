import React,{useState, useEffect} from 'react';
import axios from "axios";
import Aos from 'aos';
import "aos/dist/aos.css";
import Loading from "../pages/loading";

const Table = () => {

    // for  get API information below
    const [Global, setGlobal] = useState([]);

    // for filter countries
    const [value, setValue] = useState('');

    //bu  Loading
    const [loading, setLoading] = useState(false)

    // for get API information
    useEffect(() => {
        setLoading(true)
        axios.get(`https://restcountries.eu/rest/v2/all`)
            .then((res) => {
                console.log('its res', res)
                setGlobal(res.data)
            })
            .catch(err => console.log(err))

            .finally(() => {
                setLoading(false)
            })
    }, [])

     useEffect(() => {
        Aos.init({duration: 2000});
     }, [])

    //for filter countries
    const filteredCountries =Global.filter(counrty => {
        return counrty.name.toLowerCase().includes(value.toLowerCase())
    })

    // for HTML codes
    return (
       <section>

            {/* All  contents inside this Container*/}
            <div className="container">

                {/* its Search input*/}
                <div className="row mt-3">
                    <div className="col-12 filter">
                        <input
                            type="text"
                            placeholder="search your country..."
                            className="form-control mb-3"
                            onChange={(event => setValue(event.target.value))}
                        />
                    </div>

                    {/* here is country section*/}
                    <div className="col-12">
                        {!filteredCountries ? ('Country Not Found'):
                            (
                                <table className="table table-striped table-hover table-bordered">
                                    <thead>
                                    <tr className="text-white">
                                        <th>№</th>
                                        <th>Region</th>
                                        <th className="text-white">Capital</th>
                                        <th className="text-white">SubRegion</th>
                                        <th className="text-white">NativeName</th>
                                        <th className="text-white">Country</th>
                                        <th>Flag</th>
                                        <th className="text-white">Total Confirmed</th>
                                    </tr>
                                    </thead>

                                    {/* its for set API information to HTML with using Map */}
                                    {filteredCountries.map((item, index) => {
                                        return(
                                            <tbody key={index}>
                                            <tr key={index} className="text-white">
                                                <td className="text-white">{(index + 1)}</td>
                                                <td className="text-white">{(item.region)}</td>
                                                <td className="text-white">{item.capital}</td>
                                                <td className="text-white">{item.subregion}</td>
                                                <td className="text-white">{item.nativeName}</td>
                                                <td className="text-white">{item.name}</td>
                                                <td className="text-white"><img className="flag" src={item.flag} alt=""/></td>
                                                <td className="text-white">{item.population}</td>
                                            </tr>
                                            </tbody>
                                        )
                                    })}

                                </table>
                            )
                        }
                    </div>
                </div>
            </div>
           <div>{ loading && <Loading/> }</div>
       </section>
    );
};

export default Table;

                                                        // THE  End, TAMAM,  TUGADI.