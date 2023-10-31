import React, { useEffect, useState } from "react";
import moviesCss from "../styles/movies.module.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

function Movies() {
  let Navigate = useNavigate();
  let [category, setCategory] = useState([]);
  let [categoryData, setCategoryData] = useState({});

  useEffect(() => {
    setCategory(JSON.parse(localStorage.getItem("categories")));
  }, []);

  useEffect(() => {
    const callingApi = async (type) => {
      try {
        let raw_data = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=7ce215bedef998a057075788a5c272c5&&query=${type}`
        );
        let data = await raw_data.json();

        // Update categoryData using the category name as the key
        setCategoryData((prevData) => ({...prevData,[type]: data.results}));
      } catch (error) {
        console.log(error);
      }
    };

    // Call callingApi for each category here if needed
    category.forEach((type) => callingApi(type));
  }, [category]);

  return (
    <div className={moviesCss.container}>
      <nav>
        <p>Super app</p>
        <img onClick={() => Navigate("/")} src={logo} alt="" />
      </nav>
      <section className={moviesCss.movies_section}>
        <p>Entertainment according to your choice</p>
        <br />

        {category.map((movieType, idx) => (
          <div key={idx} className={moviesCss.collection}>
            <span>{movieType}</span>
            <br />
            <br />
            <div className={moviesCss.images}>
              {categoryData[movieType] && categoryData[movieType].map((element, index) => (element.poster_path && (
                    <img
                      key={index}
                      src={`https://image.tmdb.org/t/p/w185/${element.poster_path}`}
                      alt=""
                    />
                  )
                ))}
            </div>
            <br />
          </div>
        ))}
      </section>
    </div>
  );
}

export default Movies;