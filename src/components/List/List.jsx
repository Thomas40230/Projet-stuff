import "./List.css";
import { useState, useEffect } from "react";
import Stuffs from "../../Stuffs.json";
import eye_icon from "../../assets/eye-empty.png";
import Molotov from "../../components/Molotov/Molotov.jsx";
import Smoke from "../../components/Smoke/Smoke.jsx";
import Flash from "../../components/Flash/Flash.jsx";
import Popup from "../../components/Popup/Popup.jsx";

function List ({tick, filter, name, pos, position, id}) {

    const [stuffs] = useState(Stuffs);
    const [isOpen, setIsOpen] = useState(false);
    const [stuffId, setStuffId] = useState(0);

    console.log(isOpen)

    const iconStuff = () => {

        if (filter === "molo") {
            return <Molotov />
        }
        if (filter === "smoke") {
            return <Smoke />

        } else {
            return <Flash />
        }   
    };

    const filtered = stuffs.filter(stuffs => {
        if (tick === "any") {
            return stuffs.carte === name && stuffs.type === filter
        } else {
            return stuffs.carte === name && stuffs.type === filter && stuffs.tick.includes(tick);
        }
    });

    const filterPos = stuffs.filter(stuffs => {
        if (tick === "any") {
            return stuffs.carte === name && stuffs.type === filter && stuffs.position === position && stuffs.id !== id
        } else {
            return stuffs.carte === name && stuffs.type === filter && stuffs.tick.includes(tick) && stuffs.position === position && stuffs.id !== id;
        }
    });

    useEffect(() => {
        // Empêche le défilement de la page lorsque le popup est ouvert
        if (isOpen) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto";
        }
    }, [isOpen]);
 
    const togglePopup = (id) => {
        setIsOpen(!isOpen);
        setStuffId(id);
    };

    /*const togglePopup = (id) => {
        if (isOpen) {
            setIsOpen(false); // Ferme le popup s'il est déjà ouvert
        } else {
            setIsOpen(true); // Ouvre le popup s'il est fermé
        }
        setStuffId(id);
    };*/

    if (pos) {
    
        return (

            <div className="sl_container_mini">
                <div className="list_container">
                    {filterPos.map((stuff) =>
                        <div className="list_item_mini" key={stuff.id}>
                            <div className="icon_container_mini"> 
                                {iconStuff()} 
                            </div> 
                            <div className="container_pos_mini">
                                <span className="position_name_mini">
                                    {stuff.position}
                                </span>   
                                    <div className="tick_container_list">
                                        
                                            <span className="stuff_tick">
                                                {stuff.tick.toString()}
                                            </span>     
                                    </div>  
                            </div>
                            <div className="view_container_mini">
                                <button className="view_button" onClick={() => togglePopup(stuff.id)}>
                                    <img className="view_icon" src={eye_icon} alt="un oeil"></img>
                                    <span className="view_title">View Stuff</span>
                                </button>
                            </div>
                        </div>  
                    )}  
                    {isOpen && <Popup
                        pos
                        tick={tick}
                        filter={filter}
                        name={name} 
                        id={stuffId}
                        handleClose={togglePopup}
                        iconStuff={iconStuff}
                    />}       
                </div>
            </div>
        )
        

    } else {

        return (

            <div className="sl_container">
                <h1 className="list_title">Stuff list</h1>
                <div className="list_container">
                    {filtered.map((stuff) =>
                        <div className="list_item" key={stuff.id}>
                            <div className="icon_container"> 
                                {iconStuff()} 
                            </div> 
                            <div className="container_pos">
                                <span className="position_name">
                                    {stuff.position}
                                </span>   
                                    <div className="tick_container_list">
                                        
                                            <span className="stuff_tick">
                                                {stuff.tick.toString()}
                                            </span>     
                                    </div>  
                            </div>
                            <div className="view_container">
                                <button className="view_button" onClick={() => togglePopup(stuff.id)}>
                                    <img className="view_icon" src={eye_icon} alt="un oeil"></img>
                                    <span className="view_title">View Stuff</span>
                                </button>
                            </div>
                        </div>  
                    )}  
                    {isOpen && <Popup
                        tick={tick}
                        filter={filter}
                        name={name} 
                        id={stuffId}
                        handleClose={togglePopup}
                        iconStuff={iconStuff}
                    />}       
                </div>
            </div>
            )
    }              
};

export default List;