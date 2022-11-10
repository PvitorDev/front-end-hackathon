import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";

function Carousel() {
  const [data, setData] = useState([]);
  const carousel = useRef(null);

  useEffect(
    () => {
      fetch("https://fcamara-api.herokuapp.com/youtube/Alura")
        .then((response) => response.json())
        .then(setData);
    },
    []
  );

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
        {data.map((item) => {
          const { id, thumbnails, titulo, link } = item;
          return (
            <div className="item" key={id}>
              <div className="image">
                <img src={thumbnails} alt={titulo} />
              </div>
              <div className="title">
                <a href={link}>{titulo}</a>
              </div>
            </div>
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
