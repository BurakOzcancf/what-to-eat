import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { MainContext } from "./context";
import Foods from "./Foods";
import FoodsDetails from "./FoodsDetails";
import Category from "./Category";
import defaulProfile from "./what-to-eat.PNG";
const Main = () => {
  const [foods, setFoods] = useState(null);
  const [tags, setTags] = useState("");
  const [search, setSearch] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("Our Picks");
  const baseURL = "https://api.spoonacular.com/recipes/";
  useEffect(() => {
    if (value) {
      axios
        .get(
          `${baseURL}complexSearch?query=${value}&apiKey=${process.env.REACT_APP_API}&number=12`
        )
        .then((response) => {
          setFoods(response.data.results);
        });
    } else {
      axios
        .get(`${baseURL}random?apiKey=${process.env.REACT_APP_API}&number=12`)
        .then((response) => {
          setFoods(response.data.recipes);
        });
    }
  }, [tags, value]);
  const data = {
    foods,
    baseURL,
    tags,
    title,
    setValue,
    setSearch,
    search,
    defaulProfile,
  };

  console.log(tags);
  console.log(foods);
  console.log(search);
  return (
    <MainContext.Provider value={data}>
      <a
        className="absolute text-center w-full top-24 z-10 text-6xl text-white font-Dancing"
        href="/"
      >
        what to EAT?
      </a>
      <div className="h-96 bg-home-bg bg-bottom bg-cover bg-no-repeat"></div>

      <Router>
        <div className="grid lg:grid-cols-4 max-w-5xl lg:max-h-52 m-auto grid-cols-2 gap-2 justify-center h-96 p-5 text-white text-lg">
          <Link
            className="bg-center bg-cover bg-no-repeat bg-home-img  rounded-xl "
            onClick={() => {
              setTags("");
              setTitle("Our Picks");
            }}
            to={"/"}
          >
            <div className="h-full bg-gradient-to-t from-gray-700 rounded-xl to-transparent flex justify-center items-end hover:transition-all hover:opacity-0 pb-2">
              Home
            </div>
          </Link>
          <Link
            className="bg-center bg-cover bg-no-repeat bg-vegetarian-img  rounded-xl"
            onClick={() => {
              setTags("&tags=vegetarian");
              setTitle("Vegetarian");
            }}
            to={"/food/category"}
          >
            <div className="h-full bg-gradient-to-t from-gray-700 rounded-xl to-transparent flex justify-center items-end hover:transition-all pb-2 hover:opacity-0">
              Vegetarian
            </div>
          </Link>
          <Link
            className="bg-center bg-cover bg-no-repeat bg-vegan-img  rounded-xl"
            onClick={() => {
              setTags("&tags=vegan");
              setTitle("Vegan");
            }}
            to={"/food/category"}
          >
            <div className="h-full bg-gradient-to-t from-gray-700 rounded-xl to-transparent flex justify-center items-end hover:transition-all pb-2 hover:opacity-0">
              Vegan
            </div>
          </Link>
          <Link
            className="bg-center bg-cover bg-no-repeat bg-dessert-img  rounded-xl"
            onClick={() => {
              setTags("&tags=dessert");
              setTitle("Dessert");
            }}
            to={"/food/category"}
          >
            <div className="h-full bg-gradient-to-t from-gray-700 rounded-xl to-transparent flex justify-center items-end hover:transition-all pb-2 hover:opacity-0">
              Dessert
            </div>
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Foods />} />
          <Route path="/food/:det" element={<FoodsDetails />} />
          <Route path="/food/category" element={<Category />} />
        </Routes>
      </Router>
    </MainContext.Provider>
  );
};

export default Main;
