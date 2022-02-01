
import Share from '../Share/Share';
import './Info.css'


const Info = ({news, setNews}) => {

const filterInfos = (e) =>{
  const search = e.target.value.toLowerCase()
  
  const filteredInfos = news.filter( infos => infos.state.toLowerCase().includes(search))
  setNews(filteredInfos)
  console.log(search)
}
    
    return ( 
        <>
        <div className="input-area">
            <input type="text" className='input-area_search' onChange={(e) => filterInfos(e) } placeholder='Buscar estado' name="" id=""  />
            <i className="fas fa-search"></i>
        </div>
               {news.map((index) => (
                   
          <div key={index.uid} className="statistic"  data-aos="fade">
            <Share/>
            <div className="statistic-title">
              <h2>{index.state}</h2>
            </div>
            <div className="statistic-content">
              <div className="statistic-cases">
                <span> Número de casos: <br /> <b>{index.cases}</b> </span> <br />
              </div>
              <div className="statistic-deaths">
                <span>Óbitos : <br /> <b>{index.deaths}</b> </span> <br/>
              </div>
              <div className="statistic-suspects">
                <span>Suspeitas : <br /> <b>{index.suspects}</b> </span>
              </div>
            </div>
          </div>
        ))}
        
        </>
     );
}
 
export default Info;