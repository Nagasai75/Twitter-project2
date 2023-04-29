// import { useState } from "react";
import { getUsers } from "../../utils/localStorage";
// import { useRecoilState } from "recoil";
import styles from './login.module.css';




import { FcGoogle } from 'react-icons/fc'
import { BsApple } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'

import { useNavigate } from "react-router-dom";
import {
  emailState,
  passwordState,
  emailErrorState,
  passErrorState,
  matchState
} from "../../atoms/atoms";
import { useRecoilState } from "recoil";
import Divider from '@mui/material/Divider';




export function Login() {

  const [email, setEmail] = useRecoilState(emailState);
  const [password, setPassword] = useRecoilState(passwordState)


  const [emailError, setEmailError] = useRecoilState(emailErrorState)
  const [passError, setPassError] = useRecoilState(passErrorState)
  const [match, setMatch] = useRecoilState(matchState)

  const navigate = useNavigate();


  function validateUserEmail() {
    if (!email) {
      setEmailError('email/phone/username is required');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  }


  function validatePassword() {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;

    if (!password) {
      setPassError("password is required");
      return false;
    } else if (!regex.test(password)) {
      setPassError('password should be 8 to 20 characters and include at least 1 number, 1 letter and 1 special character');
      return false;
    } else {
      setPassError('');
      return true;
    }
  }

  

  function handleSubmit(e) {
    e.preventDefault();
    

    const isUserEmailValid = validateUserEmail()
    const isUserPasswordValid = validatePassword()

    const users = getUsers();

    if (isUserEmailValid && isUserPasswordValid) {
      let details = users.find((user) => (
        (user.email === email || user.name === email || user.mobile === email) && user.password === password
      ))

      if (details && isUserEmailValid && isUserPasswordValid) {
        let user = users.filter((user) => {
          if (user.email === email || user.name === email || user.mobile === email) {
            user.isLogin = true
          }
          return user
        })
        localStorage.setItem('users', JSON.stringify(user))
        navigate('/')
      } else {
        setMatch('Please Register')
      }
    }
    setEmail('');
    setPassword('')
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.Logcontainer}>

        {<span className={styles.errMsg}>{match}</span>}
        <div className={styles.formContainer}>
          <form className={styles.formLog} onSubmit={handleSubmit}>
            <div>
              <BsTwitter style={{ color: "#1D9BF0", fontSize: '1.5rem' }} />
            </div>
            <h2 className={styles.headSign}>Sign in to twitter</h2>
            <button className={styles.btnd}><FcGoogle />Sign in with Google</button>
            <button className={styles.btnd}><BsApple />Sign in with Apple</button>

            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <span style={{ flexGrow: 1, width: '11vw' }}>
                <Divider />
              </span>
              <span style={{ margin: '0 8px' }}>or</span>
              <span style={{ flexGrow: 1, width: '11vw' }}>
                <Divider />
              </span>
            </div>

            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Phone,email,or username"
              className={styles.inputlog}

            />
            {<span className={styles.errMsg}>{emailError}</span>}

            <input
              type='password'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Password"
              className={styles.inputlog}
            />
            {<span className={styles.errMsg}>{passError}</span>}

            <button className={styles.loginBtn} type="submit">Login</button>
           
            <button className={styles.loginBtn}>Forgot password?</button>
            <p className={styles.noAcc}>Don't have an account?<span onClick={() => navigate('/register')} className={styles.signup}>Sign up</span></p>
          </form>
        </div>
      </div>
    </div>
  );
}
