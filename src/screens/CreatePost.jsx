import { useState } from 'react'
import './index.css';
import cancel from '../img/cancel.png';

export function CreatePost({onClose, onPost}){
  const [ post, setPost ] = useState('')
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(post && post.length < 1000){
        const data = { post, premium: checked}
        console.log(data)
        onPost(post, checked)
        setPost('')
        setChecked(false)
    }
  }

  return(
    <div className='wrapper'>
      <div className='form'>
        <img className="cancel" src={cancel} alt='cancel' onClick={onClose}/>
        
        <form onSubmit={handleSubmit}>
            <div className='make-a-post'>Make a Post <small>(1000 characters max)</small></div>
            <textarea className="input_post"
                style={{backgroundColor:'#D9D9D9',}}
                onChange={e => setPost(e.target.value)}
            />
    
            <div className="left_label">
              <label> Premium </label>
              <input 
                type="checkbox"
                defaultChecked={checked}
                onChange={() => setChecked(!checked)}
              />
            </div>

            <button className='submit' >Submit Post</button>
        </form>
    
        </div>
    </div>
  )
}