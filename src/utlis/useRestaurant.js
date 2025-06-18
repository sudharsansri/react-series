import React from 'react'
import { useState, useEffect } from 'react';

export const useRestaurant = (resId) => {
    const [data, setData] = useState(null);
 useEffect(()=>{
   fetchData();
 },[])
   
 const fetchData = async () => {
    const result = await fetch('https://dummyjson.com/recipes/'+resId);
    const res = await result.json();
    setData(res);
  };
  return data;

}
