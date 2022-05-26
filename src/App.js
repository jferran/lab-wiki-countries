//import logo from './logo.svg';

import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react'
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
//import countryList from './countries.json'

function App() {
  const [countryList, setCountryList] = useState(null)
  
  useEffect(()=>{
    console.log("hey");
    getCountries();
  }, [])

  const getCountries = async () => {
    setCountryList(null)
    try{
      const response = await axios.get(`https://ih-countries-api.herokuapp.com/countries`)
      console.log(response.data)
      setCountryList(response.data)
    } catch(err){
      console.log(err)
    }
  }
  
  if (countryList === null) {
    return <h3>...Loading</h3>
  }

  return (
    <div className="App">
      <Navbar/>
      <CountriesList countryList={countryList}/>

      <Routes>
        <Route path={'/:id'} element={<CountryDetails countryList={countryList}/>}/>
      </Routes>
    </div>
  );
}

export default App;
