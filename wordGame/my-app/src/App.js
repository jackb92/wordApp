import logo from './logo.svg';
import './App.css';
import GetWord from './componants/GetWord';
import Main from './componants/Main';
import React, { useState} from 'react';


function App() {
  const [chosenLetter, setChosenLetter] = useState([])

  return (
    <div className="App">
      <header className="App-header">
        <div className="wrapper">
          <GetWord/>
          <Main
            setChosenLetter={setChosenLetter}
            chosenLetter={chosenLetter}
          />
        </div>
      </header>
    </div>
  );
}

export default App;