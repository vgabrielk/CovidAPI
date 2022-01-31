import './Share.css'


const Share = () => {
    return (

        <div className="social">
            <button className='button-share'>Compartilhar</button>
            <div className="social-share">
                <div className="whatsapp">
                    <i className="fab fa-whatsapp"></i>
                </div>
                <div className="facebook">
                    <i className="fab fa-facebook"></i>
                </div>
                <div className="twitter">
                    <i className="fab fa-twitter"></i>
                </div>
            </div>
        </div>
    );
}

export default Share;