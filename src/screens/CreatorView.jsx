import { useState } from 'react'
import './creatorView.css';
import TOP_LEFT_BLOB from '../img/top-left-blob.png';
import TOP_RIGHT_BLOB from '../img/top-right-blob.png';
import BOTTOM_LEFT_BLOB from '../img/bottom-left-blob.png';
import like from '../img/like.png';
import comment from '../img/comment.png';
import circle from '../img/circle.png';
import sus from '../img/sus.png';
import { CreatePost } from './CreatePost';
import { MdNotificationsActive } from 'react-icons/md'

export function CreatorView({ change, createPost, posts, notifications, withdraw, info, address}){
  const [ open, setOpen ] = useState(false)
  const [openNotification, setOpenNotification] = useState(false)
  const [ loading, setLoading ] = useState({
    upload: false,
    withdraw: false
  })

  const onPost = async (post, premium) => {
    setOpen(false)
    setLoading(loading => ({
      ...loading,
      upload: true
    }))
    await createPost(post, premium)
    setLoading(loading => ({
      ...loading,
      upload: false
    }))
  }

  const onWithdraw = async () => {
    setLoading(loading => ({
      ...loading,
      withdraw: true
    }))
    await withdraw()
    setLoading(loading => ({
      ...loading,
      withdraw: false
    }))
  }

  const parseNotification = (item) => {
    let final = ''
    switch (item.type) {
      case 'subscribed':
        final = `${item.address} just subscribed to your blog`
        break;
      case 'unsubscribed':
        final = `${item.address} just unsubscribed from your blog`
        break;
      case 'withdrew':
        final = 'You successfully withdrew your earnings so far'
        break;
      case 'post_failed':
      case 'withdrawal_failed':
        final = item.address
        break;
      default:
        break;
    }
    return final
  }


  return(
    <div className='creator-view' >
      <img src={TOP_LEFT_BLOB} alt='' className='top-left-blob'/>
      <img src={TOP_RIGHT_BLOB} alt='' className='top-right-blob'/>
      <img src={BOTTOM_LEFT_BLOB} alt='' className='bottom-left-blob'/>
      {
        open && 
        <CreatePost 
          onClose={() => setOpen(false)}
          onPost={onPost}
        />
      }

      {
        openNotification &&
        <div className="notifications">
            <div className='title'>
              Notifications
            </div>
            {
              notifications.length === 0 ?
              <div style={{fontSize: '15px', fontFamily: 'monospace', color: "#FFF", textAlign: "center"}}>No notifications yet</div>
              :
              notifications.map((item, index)=> (
                <div className="notification" key={index}>
                  <div>{parseNotification(item)}</div>
                  <hr />
                </div>
              ))
            }
          </div>
      }

      <div className='contract-address-notification'>
        <div className='contract-address'>{info}</div>
        <MdNotificationsActive 
          className={ notifications.length > 0 ? 'blink': ''}
          onClick={() => setOpenNotification(n => !n)}
        />
      </div>

      <div className='action-buttons'>
        <button
          className={loading.upload ? 'loading' : ''}
          disabled={loading.upload}
          onClick={() => setOpen(true)}>
            {
              loading.upload ? 'Uploading Post...' : 'Create post'
            }
        </button>
        <button
          disabled={loading.withdraw}
          onClick={onWithdraw}
          className={loading.withdraw ? 'loading' : ''}
          >
            {
              loading.withdraw ? 'Withdrawing...' : 'Withdraw Funds'
            }
        
        </button>
      </div>

      {
        posts.length === 0 &&
        <div className='blog-posts empty'>
          <p>You haven't made any posts to your blog yet.</p>
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
                      <div className='address'>{address}</div>
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

        {/* <div className='right_info'>
          
          <div className="contract-address">
            <h3>Contract Address</h3>
            <p>
              {info}
            </p>
          </div>
        </div> */}

      <small style={{color: "transparent", position: 'fixed'}}>{change}</small>
      
    </div>
  )
}