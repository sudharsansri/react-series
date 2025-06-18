import { Content } from "./card";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [recipes, setRecipes] = useState([]);
  const [filterRecipes, setFilterRecipes] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.recipes);
        setFilterRecipes(data.recipes);
      });
  }, []);

  const handleClick = () => {
    const filterData = recipes.filter((res) => res.rating > 4.9);
    setFilterRecipes(filterData);
  };

  const searchClick = (text) => {
    const filterData = recipes.filter((res) =>
      res.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilterRecipes(filterData);
  };

  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
            searchClick(event.target.value);
          }}
        />
        <button onClick={() => searchClick(searchText)} className="text-3xl font-bold">Search</button>
        search bar
      </div>
      <button onClick={handleClick}>Top Rated</button>
      <div className="content">
        {filterRecipes.map((res) => (
          <Link key={res.id} to={"/hotel/" + res.id}>
            <Content res={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;