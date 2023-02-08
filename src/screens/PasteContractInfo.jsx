import { useState } from 'react'
import TOP_BLOB from '../img/top-blob.png'
import './index.css';

export function PasteContractInfo({attach}){
  const [ info, setInfo ] = useState('')

  return(
    <div className='paste-info'>
      <img src={TOP_BLOB} alt='' className='top-blob'/>
      <div className='text'>Paste Contract Address</div>
      <textarea 
        className='info-textarea'
        style={{backgroundColor:'#D9D9D9',}}
        onChange={e => setInfo(e.target.value)}/>
      <button className='attach-button' onClick={() => attach(info)}>Attach To Blog</button>
    </div>
  )
}