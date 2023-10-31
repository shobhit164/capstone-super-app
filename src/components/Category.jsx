import React, { useEffect, useState } from "react";
import categoryCss from "../styles/category.module.css";
import alertImg from "../assets/alert.png";
import crossImg from "../assets/cross.png";
import actionImg from "../assets/Action.png";
import dramaImg from "../assets/Drama.png";
import romanceImg from "../assets/Romance.png";
import thrillerImg from "../assets/Thriller.png";
import westernImg from "../assets/Western.png";
import horrorImg from "../assets/Horror.png";
import fantasyImg from "../assets/Fantasy.png";
import musicImg from "../assets/Music.png";
import fictionImg from "../assets/Fiction.png";
import { useNavigate } from "react-router-dom";

function Category() {
  let [arrName, setArrName] = useState([]);
  let [status, setStatus] = useState(true);

  let Navigate = useNavigate()

  function func(data) {
    if (!arrName.includes(data)) {
      setArrName((prevArr) => [...prevArr, data]);
    }
  }

  function handleNext() {
    let flag = true;
    if (arrName.length < 3) {
      flag = false;
      setStatus(false);
    } else {
      setStatus(true);
      localStorage.setItem("categories", JSON.stringify(arrName));
        Navigate('/home')
    }
  }

  return (
    <div className={categoryCss.container}>
      <div className={categoryCss.left_part}>
        <div className={categoryCss.left_content}>
          <h2
            style={{
              fontFamily: "single day",
              fontSize: "2.5rem",
              color: "#72DB73",
            }}
          >
            Super app
          </h2>
          <br />
          <br />
          <h1
            style={{ fontFamily: "roboto", fontSize: "2.8rem", color: "white" }}
          >
            Choose your entertainment category
          </h1>
          <br />
          <div className={categoryCss.choices}>
            {arrName.map((ele, index) => (
              <Choice
                movieType={ele}
                key={index}
                array={arrName}
                setArrName={setArrName}
              ></Choice>
            ))}
          </div>
          <br />
          <br />
          {status ? null : (
            <p
              style={{
                fontFamily: "roboto",
                fontSize: "15px",
                fontWeight: "500",
                color: "#FF0000",
              }}
            >
              <img
                style={{ height: "15px", marginRight: "5px" }}
                src={alertImg}
                alt="alert Image"
              />
              Minimum 3 category required
            </p>
          )}
        </div>
      </div>
      <div className={categoryCss.right_part}>
        <div className={categoryCss.right_content}>
          {arr_obj.map((item, index) => (
            <Card
              key={item.id}
              movieType={item.movieType}
              movieImage={item.movieImage}
              func={func}
              idx={index}
              array={arrName}
              setArrName={setArrName}
              color={item.cardColor}
            ></Card>
          ))}

          <button
            onClick={handleNext}
            style={{
              color: "white",
              letterSpacing: "0.5px",
              fontFamily: "DM sans",
              fontWeight: "500",
              fontSize: "15px",
              cursor: "pointer",
            }}
            className={`${categoryCss.green_box} ${categoryCss.btn_position}`}
          >
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
}

export default Category;

function Choice({ movieType, array, setArrName }) {
  const isAdded = array.includes(movieType);

  return (
    <div className={categoryCss.green_box}>
      <p style={{ color: "white", letterSpacing: "0.5px", marginRight: "6px" }}>
        {movieType}
      </p>
      <img
        src={crossImg}
        alt="cross Image"
        onClick={() => {
          if (isAdded) {
            const newArray = array.filter((item) => item !== movieType);
            setArrName(newArray);
          } else {
            setArrName([...array, movieType]);
          }
        }}
      />
    </div>
  );
}

let arr_obj = [
  {
    id: 1,
    movieType: "Action",
    movieImage: actionImg,
    cardColor: '#FF5209'
  },
  {
    id: 2,
    movieType: "Drama",
    movieImage: dramaImg,
    cardColor: '#D7A4FF'
  },
  {
    id: 3,
    movieType: "Romance",
    movieImage: romanceImg,
    cardColor: '#148A08'
  },
  {
    id: 4,
    movieType: "Thriller",
    movieImage: thrillerImg,
    cardColor: '#84C2FF'
  },
  {
    id: 5,
    movieType: "Western",
    movieImage: westernImg,
    cardColor: '#902500'
  },
  {
    id: 6,
    movieType: "Horror",
    movieImage: horrorImg,
    cardColor: '#7358FF'
  },
  {
    id: 7,
    movieType: "Fantasy",
    movieImage: fantasyImg,
    cardColor: '#FF4ADE'
  },
  {
    id: 8,
    movieType: "Music",
    movieImage: musicImg,
    cardColor: '#E61E32'
  },
  {
    id: 9,
    movieType: "Fiction",
    movieImage: fictionImg,
    cardColor: '#6CD061'
  },
];

function Card({ movieType, movieImage, func, idx, array, setArrName, color}) {
  const isAdded = array.includes(movieType);

  return (
    <div
      style={{backgroundColor: `${color}`}}
      className={`${categoryCss.box} ${
        isAdded ? `${categoryCss.border}` : `${categoryCss.none}`
      }`}
      onClick={() => {
        if (isAdded) {
          const newArray = array.filter((item) => item !== movieType);
          setArrName(newArray);
        } else {
          setArrName([...array, movieType]);
        }
      }}
    >
      <h2
        style={{
          fontFamily: "DM sans",
          fontWeight: "500",
          color: "white",
          marginLeft: "13px",
        }}
      >
        {movieType}
      </h2>
      <img src={movieImage} alt="image" />
    </div>
  );
}