import './App.css';
import Header from './components/Header';
import MainBoard from './components/MainBoard';

function App() {
  return (
    <div className="App">
      <div className="app_header">
        <Header />
      </div>
      <div className="app_body">
        <MainBoard />
      </div>
    </div>
  );
}

export default App;
