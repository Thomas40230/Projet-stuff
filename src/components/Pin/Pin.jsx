import "./Pin.css";
import Molotov from "../../components/Molotov/Molotov.jsx";
import Smoke from "../../components/Smoke/Smoke.jsx";
import Flash from "../../components/Flash/Flash.jsx";

function Pin ({top, left, filter}) {

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

    return (
        <div className="pin" style={{top: `${top}%`, left: `${left}%`}}>
            <svg width="32" height="45" viewBox="0 0 32 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="16" fill="#0C0C11"/>
            <path d="M16.9449 42.2723C16.6342 43.1692 15.3658 43.1692 15.0551 42.2723L11.2636 31.3273C11.0386 30.6777 11.5211 30 12.2086 30L19.7914 30C20.4789 30 20.9614 30.6777 20.7364 31.3273L16.9449 42.2723Z" fill="#0C0C11"/>
            </svg>
            {iconStuff()}
        </div>    
    )
}

export default Pin;