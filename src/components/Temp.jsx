import React from 'react'
import tempCss from '../styles/temp.module.css'
import humidyImg from '../assets/humidityImg.png'
import mbarImg from '../assets/mbarImg.png'
import windImg from '../assets/windImg.png'

function Temp({location, date, hour, minute, ampm, humidity, speed, icon, tempe, pressure, type}) {
  return (
    <div className={tempCss.container}>
        <div className={tempCss.date_time}>
            <div className={tempCss.date1}>
                {date}
            </div>
            <div style={{fontSize: 'x-large'}}>{location}</div>
            <div className={tempCss.time1}>
                {hour}:{minute} {ampm}
            </div>
        
        </div>
        <div className={tempCss.temperature}>

            <div className={tempCss.weather}>

                <img src={icon} alt="" className={tempCss.weather_logo}/>

                <div className={tempCss.weather_type}>
                    {type}
                </div>
            </div>

            <div className={tempCss.pipe}>

            </div>

            <div className={tempCss.degree}>
                <div className={tempCss.celcius}>
                        {tempe} °C
                </div>

                <div className={tempCss.pressure}>
                    <img src={mbarImg} alt="" className={tempCss.img}/>
                    <div className={tempCss.mbar}>
                        {pressure} mbar Pressure
                    </div>

                </div>
            </div>

            <div className={tempCss.pipe}>

            </div>

            <div className={tempCss.others}>
                <div className={tempCss.wind}>
                    <img src={windImg} alt="" className={tempCss.img}/>
                    <div className={tempCss.unit}>
                        {speed} km/h Wind
                    </div>
                </div>

                <div className={tempCss.condition}>
                    <img src={humidyImg} alt="" className={tempCss.img}/>
                    <div className={tempCss.humidity}>
                        {humidity} % Humidity
                    </div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Temp