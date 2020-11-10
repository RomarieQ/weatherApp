import React, {useState} from 'react';
// import ThreeHour from '../src/components/ThreeHour';
// import FiveDay from '../src/components/FiveDay';
import Clock from '../src/components/Clock';

const URL = "api.openweathermap.org/data/2.5/"

const key = "aada787fb2635255c9f0e1819d47c885"

function App() {
  const [zip, setZip] = useState('');
  const [forecast, setForecast] = useState({});


  const search = event => {
    if (event.key === "Enter") {
      fetch(`${URL}forecast?zip=${zip},us&appid=${key}`)
      // fetch(`${URL}forecast?zip=94040,us&appid=${key}`)
      .then(res => res.json())
      .then(result => {
        setForecast(result);
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
          <Clock />
        </div>
        <div className="location-box">
          {/* there is an error in my promise and app crashes if zip and forecast divs are accessed, thus they are commented out until further resolution */}
          {/* <div className="location">{zip}</div> */}
          <div className="location">Carmel, IN</div>
          <div className="date">{dateBuild(new Date())}</div>
        </div>
        <div className="weather-box">
          {/* <div className="temp">{forecast}</div> */}
          <div className="temp">71°</div>
          {/* cannot access this until issue above resolved */}
          {/* <br></br> */}
          {/* <ThreeHour />
          <br></br>
          <FiveDay /> */}
        </div>
        
      </main>
    </div>
  );
}

export default App;
