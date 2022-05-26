import React from 'react'
import { useParams } from 'react-router-dom';
import countryList from '../countries.json'

function CountryDetails() {
    const {id}=useParams();
    const foundCountry = countryList.filter((element)=>{
        return (element.alpha3Code === id)
    })
    console.log("countrydetails: ", foundCountry)
  return (
    <div>
        <h1>CountryDetails</h1>
        <img src={`https://flagpedia.net/data/flags/w580/${foundCountry[0].alpha2Code.toLowerCase()}.webp`} alt='' />
        <p>Capital: {foundCountry[0].capital}</p>
        <p>Area: {foundCountry[0].area }</p>
        <p>Borders: {foundCountry[0].borders.map((border)=>border)}</p>
        { foundCountry[0].name.common }

    </div>
  )
}

export default CountryDetails