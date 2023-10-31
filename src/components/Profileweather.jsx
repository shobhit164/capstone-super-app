import React from 'react'
import profileCss from '../styles/profile.module.css'
import userImg from '../assets/userImg.png'

function Profileweather({name, email, username, categories}) {
  return (
    <div className={profileCss.profile}>
      
        <img src={userImg} alt="" />
      
      <div className={profileCss.right_part}>
            <div className={profileCss.p_tags}>
                <p className={profileCss.name}>{name}</p> 
                <p className={profileCss.email}>{email}</p>
                <p className={profileCss.username}>{username}</p>
            </div>
            <div className={profileCss.buttons}>
                {
                  categories.map( (element, idx) => (
                    <Button element={element} key={idx}></Button>
                  ))
                }
            </div>
            
      </div>
    </div>
  )
}

export default Profileweather


function Button({element}) {
  return (
    <button className={profileCss.btn}><span>{element}</span></button>
  )
}

