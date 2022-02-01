import './App.css';
import './responsive.css'

import { useState, useEffect } from 'react'
import Nav from './components/nav/Nav';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Info from './components/Info/Info';

function App() {


  const [news, setNews] = useState([])

  useEffect(() => {
    fetch('https://covid19-brazil-api.now.sh/api/report/v1')
      .then(res => res.json())
      .then(data => console.log(data, setNews(data.data)))
      
      AOS.init({
        duration: 1000
      })

  }, [])


  return (
    <>
        <Nav />
      <div className="header-empty"></div>
    <Home/>

      <div className="statistics">
        <div className="statistics-title">

        <h1 id='states'>Estados brasileiros
        </h1>
        

        </div>
      <Info news={news} setNews={setNews} />

      </div>
          <Footer/>
    </>
  );
}


export default App;