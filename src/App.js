import logo from './logo.svg';
import './App.css';

function App() {
  const methodDoesNotExist = ()=>{
    throw new Error('There is an error!');
  } 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       
        <button onClick={() => methodDoesNotExist()}>Break the world</button>
      </header>
    </div>
  );
}

export default App;
