import Nav from "../nav/Nav";
import Slider from "../slider/Slider";

import { useSelector } from "react-redux";

import "./style.scss";

import activeStar from "../../img/active-star.png";
import inactiveStar from "../../img/inactive-star.png";
import play from "../../img/Polygon.svg";

function Header() {
  const currentMovie = useSelector((state) => state.currentMovie);

  const headerStyle = {
    backgroundImage: `url(${currentMovie?.backdrop?.url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  //   star rating function
  const rating = currentMovie?.rating?.imdb;
  const starRating = rating / 2;

  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < Math.round(starRating)) {
      stars.push(<img key={i} src={activeStar} alt="activeStar" />);
    } else {
      stars.push(<img key={i} src={inactiveStar} alt="inactiveStar" />);
    }
  }

  //-------------------------

  return (
    <header className="header" style={headerStyle}>
      <Nav />

      <div className="header__movie-description">
        <h1 className="header__title">{currentMovie.name}</h1>

        <p className="header__description">{currentMovie.description}</p>

        <div className="header__grade">{stars}</div>
      </div>

      <div className="header__viewing">
        <button className="header__watch">
          <img src={play} alt="play video" />
          <span>Watch Now</span>
        </button>

        <button className="header__trailer">Trailer</button>
      </div>

      <Slider />
    </header>
  );
}

export default Header;
