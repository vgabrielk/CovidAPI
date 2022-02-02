import React, { useState, useEffect } from 'react';
import './Info.css'
import InfoBox from './InfoBox';


const Info = ({ news }) => {
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

      {input == '' ? null :
      
      output.map(index => (
        <>    
        
        <InfoBox key={index.uf} index={index} />
        </>
      ))
      
      }
   
      <h2 className="infobox-title">Todos os estados :</h2>
      {news.map(index => (
        <InfoBox key={index.uid} index={index} />
      ))}

    </>
  );
}

export default Info;