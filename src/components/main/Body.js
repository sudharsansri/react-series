import { Content } from "./card";
import React, { useEffect, useState } from "react";

const Body = () => {
  const [recipes, setRecipes] = useState([]);

  var resData;
  useEffect(() => {
    resData = fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data.recipes));
  }, []);
  const handleClick = () => {
    const filterData = recipes.filter((res) => res.rating > 4.9);
    console.log(filterData);
    setRecipes(filterData)
  }
  return (
    <div className="body">
      <div className="search">search bar</div>
      <button onClick={() => {console.log("event");handleClick()}}>Top Rated</button>
      <div className="content">
        {recipes.map((res) => (
          <Content key={res.id} res={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
