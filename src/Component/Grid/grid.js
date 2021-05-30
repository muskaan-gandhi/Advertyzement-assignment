import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Grid.css"
import { Roller } from 'react-spinners-css';

function Grid() {
  const [Data, setData] = useState(null);
  const[Loading, setLoading] = useState(false);

    const fetchData = async () => {
      const response = await axios.get("https://reqres.in/api/users?page=1");
      setData(response.data.data);
      setLoading(!Loading)
    };

    useEffect(() => {
      if (Loading) {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    }, [Loading]);

    if (Loading) return <Roller className="loader"/>

    return (
      <div>
        {/* Fetch data from API */}
        <div className="navbar">
          <img src={"https://lh3.googleusercontent.com/0cDOOJjp8pUGDDFLqHFITEi35uMGZ5wHpZ9KTKridxk71kpR9MfeydpQqG5n8Mvetvkg5iVuZGeL2xMvxgBY_UL-T9p0x_Eo4EAh"} alt="" className="chrome"></img>
          <button className="button" onClick={fetchData}>
            Get Users
          </button>
          <br />
        </div>
  
        {/* Display data from API */}
        <div className="grid">
        
          {Data &&
            Data.map(data => {
              return (
                <div className="card">
                    <h3 className="each-card"> {data.id}</h3>
                    <img className="avatar" src={data.avatar} alt=""></img>
                    <h2 className="each-card">{data.first_name} {data.last_name}</h2>
                    <p className="each-card">{data.email}</p>
                </div>
              );
            })}
        </div>
        </div>
  );
}

export default Grid;

