import arrow from "../../assets/arrow.png";
import Stuffs from "../../Stuffs.json";
import List from "../../components/List/List";
import YoutubeEmbed from "../../components/Youtube/Youtube.jsx";
import { useState } from "react";
import "./Popup.css";


function Popup ({handleClose, id, iconStuff, tick, filter, name, pos}) {

  const [ stuffs ] = useState(Stuffs);
  const stuff = stuffs.find(stuff => stuff.id === id);

    return (
      <div className="popup-box">
        <div className="black-box" onClick={handleClose}>
          <span></span>
        </div>
        <div className="box">
          <div className="filtered-box">
            <div className="title-box">
                <div className="icon-stuff">
                  {iconStuff()}
                </div>
                <div className="title-location">
                  {stuff.position}
                </div>
            </div>    
            <div className="video-box">
              <YoutubeEmbed embedId={stuff.link} />
            </div>
          </div>  
            <div className="other-list-box">       
                <span className="other-list-title">Other stuff for this position :</span>
                <div className="box-list">
                  <List
                  pos
                  tick={tick}
                  filter={filter}
                  name={name}
                  position={stuff.position}
                  id={id}
                   />
                </div>
            </div>

            <span className="close-icon" onClick={handleClose}>
                <img className="close-arrow" src={arrow} alt="une fleche dans un cercle"/>
            </span>
        </div>
      </div>
    );
  };
   
  export default Popup;