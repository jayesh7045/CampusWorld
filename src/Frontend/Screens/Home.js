import React from "react";
import Rooms from "./Rooms";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function Home() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(false);
  const [count, setCount] = useState(0);
  const fetchData = async () => {
    try {
      const data = (await axios.get("/api/rooms/getallrooms")).data.data;
      console.log("Jayesh has ");
      setRooms(data);
      console.log(data.length);
      setCount(data.length);
      setErrors(false);
      setLoading(false);
    } catch (err) {
      setErrors(true);
      setLoading(true);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className = "row justify-content-center mt-5">
        {loading ? (
          <h1>Loading .....</h1>
        ) : errors ? (
          <h1>Some Error has Occured</h1>
        ) : (
          rooms.map((room) => {
            return (
              <div className="col-md-9 mt-2">
                <Rooms room={room}></Rooms>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Home;
