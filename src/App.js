import React, {useState, useEffect} from 'react';

import CountUp from 'react-countup';

import './App.css';

function App() {
  const [data,setData] = useState({})

  const url = "https://api.rootnet.in/covid19-in/stats/latest";
  
  useEffect(() => {
    fetch(url).then(response => response.json()).then(result => {
      setData(result.data.summary)
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
      <h1> Infected : <CountUp start={0} end={data.confirmedCasesIndian} duration={5}></CountUp></h1>
       <h1> Discharged : <CountUp start={0} end={data.discharged} duration={5}></CountUp> </h1>
       <h1> Demise : <CountUp start={0} end={data.deaths} duration={5}></CountUp> </h1>
      </header>
    </div>
  );
}

export default App;
