import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import Error404 from '../../components/Error404/Error404';
import List from "../../components/List/List";
import Radar from "../../components/Radar/Radar";
import Maps from "../../Maps.json";
import "./Map.css";

function Map() {

    const [filter, setfilter] = useState('molo');
    const [tick, settick] = useState('64');

    const params = useParams();

    const map = 
      Maps.find((map) => params.id === map.id);
      let idtmp=Maps.find((map) => params.id === map.id);
      if (idtmp===undefined) {
        console.log ("Mauvais ID")
        return (
          <Error404 />
      )
    };

    const handleClick = (selectedStuff) => {
      setfilter(selectedStuff);
    };

    const handleClick2 = (selectedTick) => {
      settick(selectedTick);
    };



 
    return (
      <main className="map_main">
        <Radar 
          handlecallback={handleClick}
          handlecallback2={handleClick2}
          key={map.id} 
          radar={map.radar}
          name={map.name} 
          logo={map.logo}
          filter={filter}
          tick={tick}
        />

        <div className="sidebar">
          <List
          key={map.id}
          name={map.name}
          filter={filter}
          tick={tick}
          />
        </div>
   
      </main>
    )
  }
  
  export default Map;