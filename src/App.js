//import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <CountriesList/>

      <Routes>
        <Route path={'/:id'} element={<CountryDetails/>}/>

      </Routes>
    </div>
  );
}

export default App;
