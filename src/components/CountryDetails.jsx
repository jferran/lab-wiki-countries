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
    <div className='col-7'>
        <h1>{foundCountry.name.common}</h1>
        <table className='table'>
            <thead></thead>
                <img src={`https://flagpedia.net/data/flags/w580/${foundCountry.alpha2Code.toLowerCase()}.webp`} alt='' />
                <tr>
                    <td style={{width: '30%'}}>Capital</td>
                    <td>{foundCountry.capital}</td>
                </tr>
                <tr>
                    <td>Area</td>
                    <td>{foundCountry.area } km <sup>2</sup></td>
                </tr>
                <tr>
                    <td>Borders</td>
                    <td>
                        <ul>
                        {borderCountries.map((country)=> (<li><Link to={`/${country.alpha3Code}`}>{country.name.common}</Link></li>))}
                        </ul>
                    </td>
                </tr>
        </table>
    </div>
  )
}

export default CountryDetails