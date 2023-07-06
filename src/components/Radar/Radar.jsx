import "./Radar.css";
import Stuffs from "../../Stuffs.json"
import Molo from "../Molotov/Molotov.jsx";
import Flash from "../Flash/Flash.jsx";
import Smoke from "../Smoke/Smoke.jsx";
import Pin from "../Pin/Pin.jsx";
import Popup from "../../components/Popup/Popup.jsx";
import { useState, useEffect } from "react";

function Radar(props) {

    const [ stuffs ] = useState(Stuffs);
    const [isOpen, setIsOpen] = useState(false);
    const [stuffId, setStuffId] = useState(0);
    const base_url = window.location.origin;

    function setfilter(e) {
        props.handlecallback(e.target.value)
    };

    function settick(t) {
        props.handlecallback2(t.target.value)
    };

    const filtered = stuffs.filter(stuffs => {
        if (props.tick === "any") {
            return stuffs.carte === props.name && stuffs.type === props.filter
        } else {
            return stuffs.carte === props.name && stuffs.type === props.filter && stuffs.tick.includes(props.tick);
        }
    });

    const togglePopup = (id) => {
        setIsOpen(!isOpen);
        setStuffId(id);
    };

    const iconStuff = () => {

        if (props.filter === "molo") {
            return <Molo />
        }
        if (props.filter === "smoke") {
            return <Smoke />

        } else {
            return <Flash />
        }   
    };

    useEffect(() => {
        // Empêche le défilement de la page lorsque le popup est ouvert
        if (isOpen) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto";
        }
        }, [isOpen]);


    return (

        <div className="radar">
            <div className="title_container">
                <div className="logo_container">
                    <img className="logo_map" 
                        src={base_url + props.logo}
                        alt="Icon de la map"
                    />
                </div>    

                <h1 className="radar_name">
                    {props.name}
                </h1>
            </div>
            <div className="filter">    
                <h2 className="filter_title">Filter</h2>
                <div className="filter_container">

                    <fieldset className="fieldset_filtre">

                        <input type="radio" id="filterChoice1" name="filter" value="molo" onChange={event => setfilter(event)} defaultChecked/>
                        <label className="filter_button" htmlFor="filterChoice1">
                            <Molo />
                        </label> 

                        <input type="radio" id="filterChoice2" name="filter" value="smoke" onChange={event => setfilter(event)}/>
                        <label className="filter_button" htmlFor="filterChoice2">
                            <Smoke />
                        </label>

                        <input type="radio" id="filterChoice3" name="filter" value="flash" onChange={event => setfilter(event)}/>
                        <label className="filter_button" htmlFor="filterChoice3">
                            <Flash />
                        </label>

                    </fieldset>        

                </div> 

                <div className="tick_container">

                    <fieldset className="fieldset_filtre">
                        
                        <input type="radio" id="tickChoice1" name="tick" value="any" onChange={event => settick(event)}/>
                        <label className="filter_button" htmlFor="tickChoice1">
                            <span className="tick_button">Any</span>
                        </label>

                        <input type="radio" id="tickChoice2" name="tick" value="64" onChange={event => settick(event)} defaultChecked/>
                        <label className="filter_button" htmlFor="tickChoice2">
                            <span className="tick_button">64</span>
                        </label>

                        <input type="radio" id="tickChoice3" name="tick" value="128" onChange={event => settick(event)}/>
                        <label className="filter_button" htmlFor="tickChoice3">
                            <span className="tick_button">128</span>
                        </label>
                        
                    </fieldset>  
                </div>    
            </div>

            <div className="radar_container">
                <img className="radar_map" src={base_url + props.radar}
                alt="Plan de la carte"
                />
                {filtered.map((stuff) => (
                    <button className="Pin_button" onClick={() => togglePopup(stuff.id)}>
                        <Pin 
                            key={stuff.id}
                            top={stuff.locationY}
                            left={stuff.locationX}
                            filter={props.filter}
                        />
                    </button>
                ))}
                {isOpen && <Popup
                        pos
                        tick={props.tick}
                        filter={props.filter}
                        name={props.name} 
                        id={stuffId}
                        handleClose={togglePopup}
                        iconStuff={iconStuff}
                />}       
            </div>    
        </div>   
             
    )
}


export default Radar;
