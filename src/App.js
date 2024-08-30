import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const apiKey = '5f29919a2c5136501237fb09ff5e852e';

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      // Constructing the URL with the user-provided location
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location},IN&units=imperial&appid=${apiKey}`;

      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      }).catch(error => {
        console.error('Error fetching data:', error);
      });

      setLocation('');
    }
  }

  return (
    <div className='app'>
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like}°F</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
