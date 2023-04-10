import { Link } from 'react-router-dom';
import peeking from '../assets/peeking.png';


const SideBar = () => {
    return (
        <div className="sidebar">
            <Link className="link" to="/">
                <div className="sidebar-item">Home</div>
            </Link>

            <Link className="link" to="/create">
            <div className="sidebar-item">Create a Crewmate</div>
            </Link>

            <Link className="link" to="/gallery">
            <div className="sidebar-item">Crewmate Gallery</div>
            </Link>

            <div>
                <img src={peeking} className="peek" />
            </div>
        </div>
    )
}

export default SideBar;