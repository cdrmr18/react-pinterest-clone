import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import MainBoard from './components/MainBoard';
require('dotenv').config();

function App() {
  const [term, setTerm] = useState('');

  // let pins = [];

  const getSearchInput = (searchWord) => {
    setTerm(searchWord);
  };

  // axios call for unsplash api
  const axios = require('axios');
  // Make a get request to search photos
  axios
    .get(
      `https://api.unsplash.com/search/photos?client_id=${process.env.ACCESS_KEY}&query=${term}`
    )
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });

  return (
    <div className="App">
      <div className="app_header">
        <Header getSearchInput={getSearchInput} />
      </div>
      <div className="app_body">
        <MainBoard />
      </div>
    </div>
  );
}

export default App;
