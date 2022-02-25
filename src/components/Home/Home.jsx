import './Home.css'
import Mask from '../../assets/img/mask.svg'
import Button from '../../Button';


const Home = () => {
    return (

        <>
            <div className="home">
                <div className="home-text">
                    <h1>Estatísticas da covid-19 <br /> atualizadas em todos os estados do território nacional.  &#127463;&#127479;</h1>
                    <Button />
                </div>
                <div className="home-image">
                    <img src={Mask} alt="" />
                </div>
            </div>
        </>

    );
}

export default Home;