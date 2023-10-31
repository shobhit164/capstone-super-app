import React, { useEffect, useState} from 'react'
import {useNavigate } from 'react-router-dom'
import homeCss from '../styles/home.module.css'
import Profileweather from './Profileweather'
import News from './News'
import Temp from './Temp'
import Notes from './Notes'
import Timer from './Timer'

function Home() {

  let Navigate = useNavigate()

  let [name, setName] = useState('')
  let [email, setEmail] = useState('')
  let [username, setUsername] = useState('')
  let [categories, setCategories] = useState([])

  useEffect( () => {
      let string_obj = localStorage.getItem('information')
      let user_data_obj = JSON.parse(string_obj);

      setName(user_data_obj.NAME)
      setEmail(user_data_obj.EMAIL)
      setUsername(user_data_obj.USERNAME)
      
      let arr_obj = localStorage.getItem('categories')
      let categories_arr = JSON.parse(arr_obj);

      setCategories(categories_arr)

  }, [])

  let [title, setTitle] = useState('')
  let [description, setDescription] = useState('')
  let [newsImg, setNewsImg] = useState('')

  useEffect(() => {
  const newsApi = async () => {
    try {
      const raw_data = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=333618fda6dd425990d7e21b2169a83a');
      const response = await raw_data.json();

      if (response.articles && response.articles.length > 0) {
        setTitle(response.articles[0].title);
        setDescription(response.articles[0].description);
        setNewsImg(response.articles[0].urlToImage);
      } else {
        console.log("No articles found in the response");
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  newsApi();
}, []);


  let [humidity, setHumidity] = useState('')
  let [date, setDate] = useState('')
  let [hour, setHour] = useState('')
  let [minute, setMinute] = useState('')
  let [ampm, setAMPM] = useState('')
  let [type, setType] = useState('')
  let [speed, setSpeed] = useState('')
  let [icon, setIcon] = useState('')
  let [tempe, setTempe] = useState('')
  let [pressure, setPressure] = useState('')
  let [location, setLocation] = useState('') 


  useEffect(() => {
    const weatherApi = async () => {
      try {
        const raw_data = await fetch('https://api.weatherapi.com/v1/current.json?key=bdea9abc5a54446482971503232210&q=bihar');
        const response = await raw_data.json();
  
        if (response.current) {
          setHumidity(response.current.humidity);
          setIcon(response.current.condition.icon);
          setTempe(response.current.temp_c);
          setPressure(response.current.pressure_mb);
          setSpeed(response.current.wind_kph);
          setType(response.current.condition.text)
          setLocation(response.location.name)
          if(response.location){
            let today = '';
            let hr = '';
            let min = '';
              for (let i = 0; i < 10; i++) {
                today += response.location.localtime[i]
              }
              const parts = today.split("-");
              const reversedToday = parts.reverse().join("-");
              setDate(reversedToday);

              for (let i = 11; i < 13; i++){
                  hr += parseInt(response.location.localtime[i])
              }
              for (let i = 14; i < 16; i++){
                  min += parseInt(response.location.localtime[i])
              }

              let date_and_time;

              // do PM
              if(hr >= 12 && hr < 24){
                setAMPM('PM')
                setMinute(min)
                setHour(hr)
              }
              else{
                setAMPM('AM')
                setHour(hr)
                setMinute(min)
              }
            }
        } else {
          console.log("No weather data found in the response");
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    weatherApi();
  }, []);
  

  return (
    <>
        <div className={homeCss.child_1}>
          <div  className={homeCss.row_2}>
            <Profileweather name={name} email={email} username={username} categories={categories}></Profileweather>
          </div>

          <div className={homeCss.row_3}>
            <Notes></Notes>
          </div>

          <div className={homeCss.rest_row}>
            <News date={date} hour={hour} minute={minute} ampm={ampm} title={title} description={description} img={newsImg}></News>
          </div>

          <div className={homeCss.temp1}>
            <Temp location={location.toUpperCase()} date={date} hour={hour} minute={minute} ampm={ampm} humidity={humidity} speed={speed} icon={icon} tempe={tempe} pressure={pressure} type={type}></Temp>
          </div>

          <div className={homeCss.col_2}>
            <Timer></Timer>
          </div>
          <button
          onClick={() => Navigate('/movies')}
            style={{
              backgroundColor: '#148A08',
              borderRadius: '1rem',
              position: 'absolute',
              right: '4%',
              bottom: '0.5%',
              width: '8rem',
              color: "white",
              letterSpacing: "0.5px",
              fontFamily: "DM sans",
              fontWeight: "500",
              fontSize: "15px",
              cursor: "pointer",
            }}
            
          >
            Browse
          </button>
        </div> 

    </>
  )
}

export default Home
