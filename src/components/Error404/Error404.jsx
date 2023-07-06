import { Link } from "react-router-dom";
import "./Error404.css";

function Error404() {
    return (
        <main className="error_main">
            <p className="error_first_txt">404</p>
            <p className="error_second_txt">Oups ! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="error_link">
                Retourner sur la page d'accueil
            </Link>
        </main>
    )
}

export default Error404;