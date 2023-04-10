import amongus from '../assets/amongus.png';
import spaceship from '../assets/spaceship.png';

const HomePage = () => {
    return (
        <div className="home">
            <h1>Welcome to the Crewmate Creator!</h1>
            <h2>Here is where you can create your very own set of crewmates before sending them off into space!</h2>
            <img src={amongus} className="bg" />
            <img src={spaceship} className="ss" />

        </div>
    )
}

export default HomePage;