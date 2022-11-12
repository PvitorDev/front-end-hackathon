import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import api from "../../services/api";

function Carousel() {
  const [data, setData] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    api
      .get("/youtube/Alura")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);
  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  if (!data || !data.length) return null;

  return (
    <div className="container">
      <div className="carousel" ref={carousel}>
        {data &&
          data.map((item) => {
            return (
              <>
              <div className="item" key={item.id}>
                <a href={item.link}>
                <div className="image">
                  <img src={item.thumbnails} alt={item.titulo} />
                </div>
                <div className="title">
                 {item.titulo}
                </div>
              </a>
              </div>
             
              </>
            );
          })}

       
      </div>
      <div className="buttons">
        <button onClick={handleLeftClick}>
          <HiChevronLeft />
        </button>
        <button onClick={handleRightClick}>
          <HiChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
