import { useState } from 'react'
import './index.css';
import TOP_LEFT_BLOB from '../img/top-left-blob.png';
import TOP_RIGHT_BLOB from '../img/top-right-blob.png';
import BOTTOM_LEFT_BLOB from '../img/bottom-left-blob.png';
import like from '../img/like.png';
import comment from '../img/comment.png';
import circle from '../img/circle.png';
import sus from '../img/sus.png';

export function SubscriberView({subscribed, change, posts, subscribe, unsubscribe, info}){
  const [ loading, setLoading ] = useState(false)

  const onSubscribe = async () => {
    setLoading(true)
    await subscribe()
    setLoading(false)
  }

  const onUnsubscribe = async () => {
    setLoading(true)
    await unsubscribe()
    setLoading(false)
  }

  return(
    <div>
      <img src={TOP_LEFT_BLOB} alt='' className='top-left-blob'/>
      <img src={TOP_RIGHT_BLOB} alt='' className='top-right-blob'/>
      <img src={BOTTOM_LEFT_BLOB} alt='' className='bottom-left-blob'/>

      <div className='contract-address-notification'>
        <div className='contract-address'>{info}</div>
      </div>
      {/* <h4 className='blog-feed-header'>Blog Feed</h4> */}

      <div className="action-buttons float-right">
        {
          subscribed ? 
          <button onClick={onUnsubscribe} className={loading ? 'loading' : ''}>
            { loading ? 'Unsubscribing..' : 'Unsubscribe from premium'}
          </button>
          :
          <button onClick={onSubscribe} className={loading ? 'loading' : ''}>
            { loading ? 'Subscribing..' : 'Subscribe to premium'}
          </button>
        }
        
      </div>

      {
        posts.length === 0 &&
        <div className='blog-posts empty'>
          <p>Blog owner hasn't made any posts yet.</p>
        </div>
      }

      {
        posts.length > 0 &&
        <div className="blog-posts">
          {
            posts.map((item, index)=>(
              <div className='card-wrapper' key={index}>
                  <div className="card-inner">
                    <img src={sus} alt="profile icon" className='avatar' />
                    <div className='content'>
                      {/* <div className='address'>{address}</div> */}
                      <div className='post-content'>
                        {item}
                      </div>
                    </div>
                  </div>
                  <div className='social-icons'>
                      <img src={like} alt="icons" />
                      <img src={comment} alt="icons" />
                      <img src={circle} alt="icons" />
                    </div>
              </div>
            ))
          }
        </div>
      }
      <small style={{color: "transparent", position: 'fixed'}}>{change}</small>
    </div>
  )
}