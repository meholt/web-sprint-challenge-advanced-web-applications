import React, { useState, useEffect } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../util/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [refresh, setRefresh] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() => {
    getColors();
  }, [refresh]);

    const getColors = id => {
      axiosWithAuth()
      .get('http://localhost:5000/api/colors')
      .then(res => setColorList(res.data))
      .catch(err => console.log(err.response));
    };
  

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} refresh={refresh} setRefresh={setRefresh} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
