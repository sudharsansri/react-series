import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRestaurant } from "../../utlis/useRestaurant";
import {useOnlineStatus} from "../../utlis/useOnlineStatus";
import {ItemsRes} from "./ItemsRes";

 const items = [
  {
    title: "JavaScript Basics",
    content: "Learn variables, functions, and loops in JavaScript."
  },
  {
    title: "React.js Overview",
    content: "Understand components, state, and props in React."
  },
  {
    title: "Node.js",
    content: "Basics of server-side development with Node.js."
  },
  {
    title: "Full-Stack Development",
    content: "Build full-stack apps with React and Node.js."
  },
];

export const Hotel = () => {
  //const [data, setData] = useState(null);
  const { resId } = useParams();
  const [index, setIndex] = useState(0);
 

  const data = useRestaurant(resId);
  const onlineStatus = useOnlineStatus();
  const handleClick = (i)=>{
    setIndex((prev)=>prev === i ? null: i);    
  }
  if (!onlineStatus) {
    return <h1>Looks like you are offline, please check your internet connection</h1>;    
  }
  return (
    <div>
    <div className="card  ">
      <h1>{data?.name}</h1>
      <ul>
        {data?.ingredients?.map((val) => (
          <li key={val}>{val}</li>
        ))}
      </ul>
      <img src={data?.image} alt={data?.name} className="w-50"/>
      
    </div>
    {items.map((item,i)=>(
      <ItemsRes key={i} item={item} showIndex={()=>{ handleClick(i)}} selected={index} current={i}/>
    ))}
    
     </div>
  );
};

//controlled component is a component that takes its value from props and updates its value using props