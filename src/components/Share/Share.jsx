import './Share.css'

const Share = () => {
    return (

        <div className="social">
            <button className='button-share'>Compartilhar</button>
            <div className="social-share">
                <div className="whatsapp">
                    <i class="fab fa-whatsapp"></i>
                </div>
                <div className="facebook">
                    <i class="fab fa-facebook"></i>
                </div>
                <div className="twitter">
                    <i class="fab fa-twitter"></i>
                </div>
            </div>
        </div>
    );
}

export default Share;