import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { currentMovieSwitch } from "../../data/reducer";
import { useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./style.scss";

function Slider() {
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movies);

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState(1);

  useEffect(() => {
    dispatch(currentMovieSwitch(movies[0]));
  }, [dispatch]);

  const handleSlideClick = (item, index) => {
    dispatch(currentMovieSwitch(item));
    setActiveIndex(index);
  };

  console.log(movies);

  const handleSlideChange = (swiper) => {
    const activeSlide = swiper.slides[swiper.activeIndex];
    const ariaLabel = activeSlide.getAttribute("aria-label");

    const activeSlideNumber = ariaLabel.split("/")[0];

    setActiveSlideIndex(Number(activeSlideNumber));

    if (activeIndex < activeSlideNumber) {
      return setActiveIndex(Number(activeSlideNumber) - 1);
    } else if (activeIndex > Number(activeSlideNumber) + 4) {
      return setActiveIndex(Number(activeSlideNumber) + 4);
    }
  };

  return (
    <div className="popular">
      <p className="popular__title">Popular Movies</p>

      <Swiper
        className="popular__slider"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={23}
        slidesPerView={6}
        slidesPerGroup={1}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        onSlideChange={handleSlideChange}>
        {movies.slice(0, 8).map((item, index) => {
          const divStyle = {
            backgroundImage: `url(${item.poster_path})`,
          };

          let marginLeft = 0;

          if (activeSlideIndex === 2) {
            marginLeft = 45;
          } else if (activeSlideIndex === 3) {
            marginLeft = 60;
          } else {
            marginLeft = 30;
          }

          const slideStyle = {
            marginLeft: `${marginLeft}px`,
          };

          const noneStyle = {};

          return (
            <SwiperSlide
              className={`${index === activeIndex ? "active-slide" : "slide"} `}
              style={index === activeSlideIndex - 1 ? slideStyle : noneStyle}
              key={index}
              onClick={() => handleSlideClick(item, index)}>
              <div
                className={index === activeIndex ? "active-box" : "box"}
                style={divStyle}></div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <button className="custom-prev"></button>
      <button className="custom-next"></button>
    </div>
  );
}

export default Slider;
