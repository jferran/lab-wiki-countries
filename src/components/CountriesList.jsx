import React from 'react'
import { Link } from 'react-router-dom'

function CountriesList({countryList}) {
  return (
    <div>
        {countryList.map((country) => {
            return (
                <li key={country.alpha3Code}>
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt=''/>
                    <Link to={`/${country.alpha3Code}`} countryList={countryList}>{country.name.common}</Link>
                </li>
            )
            })
        }
    </div>
  )
}

export default CountriesList