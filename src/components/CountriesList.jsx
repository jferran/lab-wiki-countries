import React from 'react'
import { Link } from 'react-router-dom'
import countryList from '../countries.json'

function CountriesList() {
  return (
    <div>
        {countryList.map((country) => {
            return (
                <li key={country.alpha3Code}>
                    <Link to={`/${country.alpha3Code}`}>{country.name.common}</Link>
                </li>
            )
            })
        }
    </div>
  )
}

export default CountriesList