import { useState } from 'react'
import './subscriptionPrice.css';
import MARNI from '../img/flying-bros.png';
import ALGO from '../img/algo.png';

export function SubscriptionPrice({deploy}){
  const [ price, setPrice ] = useState('')

  return(
    <div className='subscription'>
        <img className="flying-man" src={MARNI} alt='marni' />
        <div className='subscription-price-form'>
          <div className='subscription-price-input'>
            <input
              type={'number'}
              style={{backgroundColor:'#D9D9D9',}}
              onChange={e => setPrice(e.target.value)}
              min={0}
            />
            <img src={ALGO} alt='algo' />
          </div>
            
          <button className='button-price' onClick={() => deploy(parseInt(price))}>Set Subscription Price</button>
        </div>
      
    </div>
  )
}