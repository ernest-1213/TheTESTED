import React, { useEffect, useState } from 'react'
import cloud from "../src/Icon/Picture/Cloud.jpg";
import humidity from "../src/Icon/Picture/humidity.png";
import wind from "../src/Icon/Picture/wind.jpg";
import axios from 'axios';


function Home() {
  const [data,setData]= useState({
    celcius: 30,
    name:'Penang',
    humidity:10,
    speed: 2
  })

  useEffect(()=>{
    const apiUrl='https://api.openweathermap.org/data/2.5/weather?q=Penang&appid=af84cb4ddfc31d841bb2594c407b4fec';
    axios.get(apiUrl)
    .then(res=>{
      setData({...data,celcius : res.data.main.temp, name:})
    })
    .catch(err =>console.log(err));

  },[])

  return (
    <div className="container">
      <div className="weather">
        <div className="search">
        <input type="text"  className="input" placeholder="search"/>
        <button>search</button>
        </div>
      </div>
      <div className='weather-container'>
        <img src={cloud}alt="" className="cloud"></img>
        <h1>35°C</h1>
        <h2>Penang</h2>
        <div className="list-history">
          <div className="col">
            <img src={humidity} alt="" className="water"/>
            <div>
                <p>10%</p>
                <p>Humidity</p>
            </div>
          </div>

          <div className="col">
            <img src={wind} alt="" className="air"/>
            <div>
                <p>2 km/h</p>
                <p>Wind</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home