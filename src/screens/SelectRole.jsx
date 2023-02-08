import './selectRole.css'
import cloudOne from '../img/cloud1.png'
import cloudTwo from '../img/cloud2.png'

export function SelectRole({deploy, attach}){
  return(
    <div className='select-role' >
        <img className='cloudOne' src={cloudOne} alt='cloud'/>
        <img className='cloudTwo' src={cloudTwo} alt='cloud'/>
        <img className='cloudThree' src={cloudTwo} alt='cloud'/>

        <div className='about'>
          <span>Cloudy</span> is a decentralized microblog app that runs on the Algorand blockchain network. 
          A platform on which users can either have a simple blog where they post anything of interest, 
          or subscribe to an already existing blog.
        </div>
      
        <button className='button-deploy' onClick={() => deploy()}>Create and deploy blog</button>
        <button className='button-attach' onClick={() => attach()}>Attach to existing blog</button>
    </div>
  )
}