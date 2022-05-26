import React from 'react'
import { Link } from 'react-router-dom'

function CountriesList({countryList}) {
  return (

    
    <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
        <div className="list-group">
            {countryList.map((country) => {
                return (
                    <a key={country.alpha3Code} className="list-group-item list-group-item-action">
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt=''/>
                        <Link to={`/${country.alpha3Code}`}>{country.name.common}</Link>
                    </a>
                )
                })
            }
        </div>
    </div>
  )
}

export default CountriesList