import React, {useState} from 'react';

const URL = "api.openweathermap.org/data/2.5/"

const key = "aada787fb2635255c9f0e1819d47c885"

function App() {
  const [zip, setZip] = useState('');
  const [weather, setWeather] = useState({});


  const search = event => {
    if (event.key === "Enter") {
      fetch(`${URL}weather?zip=${zip},us&appid=${key}`)
      // fetch(`${URL}weather?zip=94040,us&appid=${key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setZip('');
        console.log(result);
      });
    }
  } 

  
  const dateBuild = (d) => {
    
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${month} ${date}, ${year}`
  }
  
  return (
    <div className="App">
      <main>
        <div className="search-entry">
          <input type="text" className="search-box" placeholder="enter your zip" 
          onChange={e => setZip(e.target.value)}
          value={zip}
          onKeyPress={search}>
          </input>
        </div>
        <div className="location-box">
          {/* <div className="location">{zip}</div> */}
          <div className="location">Carmel, IN</div>
          <div className="date">{dateBuild(new Date())}</div>
        </div>
        <div className="weather-box">
          {/* <div className="temp">{weather}</div> */}
          <div className="temp">71°</div>
        </div>
      </main>
    </div>
  );
}

export default App;
