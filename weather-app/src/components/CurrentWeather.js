import React from 'react';

const CurrentWeather = (props) => {

  return(
    <div className="text-center">
      <div>
        Icon: <img src={`http://openweathermap.org/img/w/${props.icon}.png`} alt="" />
      </div>
      <div>
        Location: {props.city}
      </div>
      <div>
        Temp: {Math.round(props.temp)} C
      </div>
      <div>
        Wind Speed: {props.wind}
      </div>
    </div>
  )
}

export default CurrentWeather