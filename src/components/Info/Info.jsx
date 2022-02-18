import React, { useState } from 'react';

import './Info.css'
import InfoMap from './InfoMap';


const Info = ({ news }) => {
  const [input, setInput] = useState('')

  return (
    <>
      <div className="input-area">
        <input type="text" className='input-area_search'  onChange={e => setInput(e.target.value)} placeholder='Buscar estado' name="" id="" />
        <i className="fas fa-search"></i>
      </div>


    <InfoMap news ={news} input={input}/>
    </>
  );
}

export default Info;