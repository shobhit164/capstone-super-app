import React, { useState, useRef} from "react";
import registerPic from "../assets/registerPic.png";
import registerCss from "../styles/registration.module.css";
import appCss from '../styles/App.module.css'
import {useNavigate} from 'react-router-dom'

function Registration() {

  let navigate = useNavigate()
  const nameRef = useRef(null);
  const userNameRef = useRef(null);
  const emailRef = useRef(null);
  const mobileRef = useRef(null);
  
  
  let [name, setName] = useState('')
  let [nameVar, setNameVar] = useState(false)

  let [userName, setUserName] = useState('')
  let [UserNameVar, setUserNameVar] = useState(false)

  let [Email, setEmail] = useState('')
  let [EmailVar, setEmailVar] = useState(false)

  let [Mobile, setMobile] = useState('')
  let [MobileVar, setMobileVar] = useState(false)

  const [isChecked, setIsChecked] = useState(false);
  const [message, setMessage] = useState('');

  let flag = true

  let checking = () => {

      if(name === ''){
          flag = false
          nameRef.current.style.border = '1px solid red';
          setNameVar(true)
      }
      if(userName === ''){
          flag = false
          userNameRef.current.style.border = '1px solid red';
          setUserNameVar(true)
      }
      if(Email === ''){
        flag = false
        emailRef.current.style.border = '1px solid red';
        setEmailVar(true)
      }
      if(Mobile === ''){
        flag = false
        mobileRef.current.style.border = '1px solid red';
        setMobileVar(true)
      }
      
      if (!isChecked) {
        flag = false
        setMessage('Check this box if you want to proceed');
      }
      
  }

  let saveData = (e) => {
      e.preventDefault()
      checking()
      if(flag === true){
        console.log(name)
        console.log(userName)
        console.log(Email)
        console.log(Mobile)

        let info = {
          NAME : name,
          USERNAME : userName,
          EMAIL : Email,
          MOBILE : Mobile
        }
        console.log(info)
        const StringifyInfo = JSON.stringify(info);
        localStorage.setItem('information', StringifyInfo);
        navigate('/category')
      }
  }

  return (
    <div className={registerCss.container}>

        <div className={registerCss.image_container}>
            <div>Discover new things on Superapp</div>
            <img src={registerPic} alt="" />
        </div>


      <div className={registerCss.form_section}>
          
            
            <form onSubmit={saveData} className={registerCss.form}>
              <h1>Super app</h1>
              <p>Create your new account</p>

              <br />
              <div className={registerCss.info} >
                <input ref={nameRef} type="text" name="name" placeholder="Name" onChange={(e) => {setName(e.target.value); setNameVar(false); nameRef.current.style.border = 'none'}}/>
                {nameVar ? <h5 >Field is required</h5> : null}
              </div>

              <br />

              <div className={registerCss.info} >
                <input ref={userNameRef} type="text" name="Username" placeholder="Username" onChange={(e) => {setUserName(e.target.value); setUserNameVar(false); userNameRef.current.style.border = 'none'}}/>
                {UserNameVar ? <h5>Field is required</h5> : null}
              </div>

              <br />

              <div className={registerCss.info} >
                <input ref={emailRef} type="email" name="Email" placeholder="Email" onChange={(e) => {setEmail(e.target.value); setEmailVar(false); emailRef.current.style.border = 'none'}}/>
                {EmailVar ? <h5>Field is required</h5> : null}
              </div>

              <br />

              <div className={registerCss.info} >
                <input ref={mobileRef} type="number" name="Mobile" placeholder="Mobile" onChange={(e) => {setMobile(e.target.value); setMobileVar(false); mobileRef.current.style.border = 'none'}}/>
                {MobileVar ? <h5>Field is required</h5> : null}
              </div>

              <br />

              <div className={registerCss.checkField}>
                <input type="checkbox" onChange={(e) => {setIsChecked(e.target.checked); setMessage('')}}/>
                <span>Share my registration data with Superapp</span>
              </div>
              {message && <h5>{message}</h5>}
              
              
              <br />

              <button>SIGN UP</button>

            <div className={registerCss.para}>
              <p>By clicking on Sign up. you agree to Superapp <span>Terms and Condition of Use</span></p>

              <br />
              
              <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span>Privacy Policy</span></p>
            </div>
            </form>
            
          
      </div>
    </div>
  );
}

export default Registration;
