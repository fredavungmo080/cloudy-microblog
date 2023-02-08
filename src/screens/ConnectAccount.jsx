import './connectAccount.css';
import cloudOne from '../img/cloud1.png'
import cloudTwo from '../img/cloud2.png'
import pilot from '../img/pilot.png'
import meditatingMan from '../img/meditating man.png'
import blob from '../img/connect-wallet-blob.png'

export function ConnectAccount({connect}){
  return(
    <div className='connectAcct'>
      <img className="cloud1" src={cloudOne} alt='cloud' />
      <img className="cloud2" src={cloudTwo} alt='cloud' />
      <div className="ellipse"></div>
      <img className="pilot" src={pilot} alt='cloud' />
      <img className="meditator" src={meditatingMan} alt='cloud' />
      <img className="connect-blob" src={blob} alt='cloud' />
      <div className="connect-message">Welcome to <span>cloudy</span></div>
      <button className='connect-button' onClick={() => connect()}>Connect To MyAlgo Wallet</button>
    </div>
  )
}