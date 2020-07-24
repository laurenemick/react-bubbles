import React, { useState, useEffect } from "react";
// import axios from "axios";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false)
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  const getColors = () => {
    return axiosWithAuth()
      .get('/api/colors')
      .then(res => {
        setColorList(res.data)
        setIsUpdated(false)
      })
      .catch(err => console.log(err))
  }
  
  useEffect(() => {
    getColors()
  }, [isUpdated])

  return (
    <>
      <ColorList setIsUpdated={setIsUpdated} colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};
export default BubblePage;
