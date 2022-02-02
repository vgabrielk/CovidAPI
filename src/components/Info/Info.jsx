import React, { useState, useEffect } from 'react';
import './Info.css'
import InfoBox from './InfoBox';


const Info = ({ news }) => {
  const [search, setSearch] = useState(null)
  const [input, setInput] = useState('')
  const [output, setOutput] = useState([])

  useEffect(() => {

    setOutput([])
    news.filter(val => {
      if (val.state.toLowerCase().includes(input.toLowerCase())) {
        setOutput(output => [...output, val])
      }
    })

  }, [input])


  return (
    <>
      <div className="input-area">
        <input type="text" className='input-area_search' onChange={e => setInput(e.target.value)}  placeholder='Buscar estado' name="" id="" />
        <i className="fas fa-search"></i>
      </div>
     
      {output.map(index => (
        <InfoBox index={index}/>
      ))}
      {news.map(index => (
        <InfoBox index={index}/>
      ))}
      

    </>
  );
}

export default Info;