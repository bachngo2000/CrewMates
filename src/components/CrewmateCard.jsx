import { Link } from "react-router-dom"
import crewmate from "../assets/crewmate.png"

const CrewmateCard = ({name, speed, color, id}) => {
    return (
        <div className="crewmate-card" id={color}>
            <img src={crewmate} className="single-crewmate"></img>
            <h3>Name: {name}</h3>
            <h3>Speed: {speed} MPH</h3>
            <h3>Color: {color}</h3>
            <Link to={`/${id}/edit`}>
                <button className="edit-button">Edit Crewmate</button>
            </Link>
        </div>
    )
}

export default CrewmateCard;