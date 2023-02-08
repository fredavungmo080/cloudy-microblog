import logo from '../logo.svg'
import './index.css'
import '../screens/index.css'
import TOP_BLOB from '../img/top-blob.png'

export function Loader(){
  return(
    <div style={{display: 'flex', flexDirection: 'column', paddingTop: '130px'}}>
      <img src={TOP_BLOB} alt='' className='top-blob'/>

      <img src={logo} className='loader' alt='loader'/>
    </div>)
}