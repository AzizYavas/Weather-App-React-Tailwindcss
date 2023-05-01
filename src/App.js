import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [data, setData] = useState([]);

  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=097cf9dd7a5048133fdebc942a49a6b3`;

  const iconUrlFromCode = (code) => {
    return `https://openweathermap.org/img/wn/${code}@2x.png`;
  }

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
        axios.get(url).then((response) => {
        setData(response.data)
        // console.log(response.data.weather[0].main);

        if (response.data.weather[0].main === 'Rain') {
          setBackgroundClass('bg-rain');
        } else if (response.data.weather[0].main === 'Clouds') {
          setBackgroundClass('bg-clouds');
        } else if (response.data.weather[0].main === 'Clear') {
          setBackgroundClass('bg-sunny');
        }

      })
      setLocation('')

    }
  }


  const [backgroundClass, setBackgroundClass] = useState('');

  console.log(backgroundClass);

  return (
    <section className={`w-full h-screen bg-center bg-cover ${backgroundClass}`}>
      <div className="max-w-3xl p-4 mx-auto text-center">
        <div className="flex justify-center px-8 py-8">
          <input type="text" className="rounded-3xl p-4 focus:outline-none" value={location} onKeyPress={searchLocation} onChange={event => setLocation(event.target.value)} placeholder='Şehir Seç' />
        </div>

        <div iv className="flex justify-between">
          {data.name != undefined &&
            <div className="space-y-3">
              <div className="flex flex-row justify-center text-left">
                <p className="text-2xl font-normal text-left w-48">{data.name}</p>
              </div>
              <div className="flex flex-row justify-center space-x-4 text-left">
                {data.main ? <img src={iconUrlFromCode(data.weather[0].icon)} alt="" className="w-30" /> : null}
                {data.main ? <p className="text-7xl font-semibold">{data.main.temp.toFixed()}°C</p> : null}
              </div>
            </div>
          }
          {data.main ? <span className="-rotate-90 text-2xl font-bold ">{data.weather[0].main}</span> : null}
        </div>

        {data.main != undefined &&
          <div>
            <div className="flex flex-row justify-center items-center absolute bottom-4 inset-x-0">
              <div className="flex flex-row space-x-20 py-4 px-20 justify-center bg-white rounded-xl bg-opacity-40">
                <div className="flex flex-col items-center">
                  {data.main ? <p className="font-semibold text-xl">{data.main.feels_like.toFixed()} C°</p> : null}
                  <p className="text-2xl font-semibold text-center ">Hissedilen</p>
                </div>
                <div className="flex flex-col items-center">
                  {data.main ? <p className="font-semibold text-xl">{data.main.humidity} %</p> : null}
                  <p className="text-2xl font-semibold text-center ">Nem</p>
                </div>
                <div className="flex flex-col items-center">
                  {data.main ? <p className="font-semibold text-xl">{data.wind.speed.toFixed()} km/h</p> : null}
                  <p className="text-2xl font-semibold text-center ">Rüzgar</p>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </section>

  );
}

export default App;


