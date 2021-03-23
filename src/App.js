import './reset.css'
import Routes from './routes'
import Header from './Components/Header/Header'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      {Routes}
    </div>
  );
}

export default App;
