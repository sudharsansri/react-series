import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRestaurant } from "../../utlis/useRestaurant";
import {useOnlineStatus} from "../../utlis/useOnlineStatus";

export const Hotel = () => {
  //const [data, setData] = useState(null);
  const { resId } = useParams();


  const data = useRestaurant(resId);
  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return <h1>Looks like you are offline, please check your internet connection</h1>;    
  }
  return (
    <div className="card  ">
      <h1>{data?.name}</h1>
      <ul>
        {data?.ingredients?.map((val) => (
          <li key={val}>{val}</li>
        ))}
      </ul>
      <img src={data?.image} alt={data?.name} className="w-50"/>
    </div>
  );
};