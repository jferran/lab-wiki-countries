import React from 'react'
import { Link, useParams } from 'react-router-dom';
//import countryList from '../countries.json'

function CountryDetails({countryList}) {
    const {id}=useParams();
    const foundCountry = countryList.find((element)=>{
        return (element.alpha3Code === id)
    })
    const borderCountries=foundCountry.borders
    .map((border)=> countryList
    .find((country)=> country.alpha3Code===border)
    )
    
  return (
    <div>
        <h1>CountryDetails</h1>
        <img src={`https://flagpedia.net/data/flags/w580/${foundCountry.alpha2Code.toLowerCase()}.webp`} alt='' />
        <p>Capital: {foundCountry.capital}</p>
        <p>Area: {foundCountry.area }</p>
        <p>Borders: {borderCountries.map((country)=> (<li><Link to={`/${country.alpha3Code}`}>{country.name.common}</Link></li>))}</p>
        { foundCountry.name.common }

    </div>
  )
}

export default CountryDetails