import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import MainBoard from './components/MainBoard';

function App() {
  const [term, setTerm] = useState('');

  let pins = [];

  const getSearchTerm = (searchWord) => {
    // searchTerm = searchWord;
    setTerm(searchWord);
  };
  // axios call for unsplash api

  return (
    <div className="App">
      <div className="app_header">
        <Header getSearchTerm={getSearchTerm} />
      </div>
      <div className="app_body">
        <MainBoard />
      </div>
    </div>
  );
}

export default App;
