import React from 'react'

const ForecastSingle = (props) => {
  const date = new Date(props.time * 1000),
        hours = date.getHours(),
        minutes = "0" + date.getMinutes()

  return(
     <div className="col-sm-2">
      <div>
        Icon: <img src={`http://openweathermap.org/img/w/${props.icon}.png`} alt="" />
      </div>
      <div>
        Time: {hours}: {minutes.substr(-2)}
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

export default ForecastSingle