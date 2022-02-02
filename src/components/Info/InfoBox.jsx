import Share from '../Share/Share'

const InfoBox = ({index, title}) => {
    return ( 

        <>
        <div className="statistic" data-aos="fade">
          <Share />
          <div className="statistic-title">
            <h2>{index.state}</h2>
          </div>
          <div className="statistic-content">
            <div className="statistic-cases">
              <span> Número de casos: <br /> <b>{index.cases}</b> </span> <br />
            </div>
            <div className="statistic-deaths">
              <span>Óbitos : <br /> <b>{index.deaths}</b> </span> <br />
            </div>
            <div className="statistic-suspects">
              <span>Suspeitas : <br /> <b>{index.suspects}</b> </span>
            </div>
          </div>
        </div>
        </>
     );
}
 
export default InfoBox;