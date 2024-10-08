import Loader from "./components/loader/Loader";
import Movie from "./pages/Movie";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import AllMovies from "./pages/Movies";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { moviesFetch } from "./data/actions";

import "./styles/main.scss";

import React from "react";
import ScrollToTop from "./utils/scrollToTop";

function App() {
  const loadState = useSelector((state) => state.loading);

  const style = {
    maxWidth: "100%",
  };

  const noneStyle = {};

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(moviesFetch());
  }, []);

  return (
    <div className="App" style={loadState ? style : noneStyle}>
      {loadState ? (
        <Loader />
      ) : (
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/movie/:id" element={<Movie />} />

            <Route path="/favorite" element={<Favorite />} />

            <Route path="/movies" element={<AllMovies />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
