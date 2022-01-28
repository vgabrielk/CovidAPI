import './App.css';
import './responsive.css'

import { useState, useEffect } from 'react'
import Nav from './components/nav/Nav';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './components/Home/Home';
import Share from './components/Share/Share';
import Footer from './components/Footer/Footer';

function App() {


  const [news, setNews] = useState([])

  useEffect(() => {
    fetch('https://covid19-brazil-api.now.sh/api/report/v1')
      .then(res => res.json())
      .then(data => console.log(data, setNews(data.data)));

      AOS.init({
        duration: 1000
      })

  }, [])


  return (
    <>
      <div className="header">
        <Nav />
      </div>
      <div className="header-empty"></div>
    <Home/>

      <div className="statistics">
        <div className="statistics-title">

        <h1 id='stats'>Estados do Brasil</h1>
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

      </div>
          <Footer/>
    </>
  );
}


export default App;