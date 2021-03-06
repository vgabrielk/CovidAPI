import './App.css';
import './responsive.css'

import 'aos/dist/aos.css';
import { useState, useEffect } from 'react'
import Nav from './components/nav/Nav';



import AOS from 'aos';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Info from './components/Info/Info';

function App() {

  const [loading, setLoading] = useState(false)
  const [news, setNews] = useState([])
  const [hideNav, setHideNav] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])



  useEffect(() => {
    fetch('https://covid19-brazil-api.now.sh/api/report/v1')
      .then(res => res.json())
      .then(data => console.log(data, setNews(data.data)))

    AOS.init({
      duration: 1000
    })


  }, [])
  useEffect(() => {

    function scrollPosition() {

      if (window.scrollY > 100) {
        setHideNav(true)
      }
      else {
        setHideNav(false)
      }
    }

    window.addEventListener('scroll', scrollPosition)
  }, [])


  return (
    <>
      {loading ?
        <div className='Dot'>
          <img width={100} src='https://www.un.org/sites/un2.un.org/files/covid-19.svg' alt="Covid-19 logo" />
        </div>
        :
        <>
          <Nav hideNav={hideNav} />
          <div className="header-empty"></div>
          <Home />

          <div className="statistics">
            <div className="statistics-title">

            </div>
            <Info news={news} setNews={setNews} />

          </div>
          <Footer />
        </>
      }
    </>
  );
}


export default App;