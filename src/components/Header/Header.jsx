import React, { useState, useEffect } from 'react'
import style from './style.module.css'
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'

export default function Header() {
  const [userName, setUserName] = useState('Log In')
  const [logOutStatus, setLogOutStatus] = useState(false)
  const user = useSelector(store => store.user)

  useEffect(() => {
    if(user.status){
      setUserName(user.name)
      setLogOutStatus(true)
    }
  }, [])
  function logOut(){
    localStorage.clear()
    
  }


  return (
    <section className={style.header}>
      <section className={style.content__container}>
        <ul className={style.unordered}>
          <li>
            <Link to="/">
              LOGO
            </Link>
          </li>
          <li>
            <nav className={style.nav}>
              <Link to="/user">
                <Button variant="contained">{userName}</Button>
              </Link>
              <p className={logOutStatus === true ? style.DisplayBlock : style.displayNone}>
              <Link to="/">
                <Button variant="outlined" onClick={logOut()}>Log Out</Button>
              </Link>
                
              </p>
            </nav>
          </li>
        </ul>
      </section>
    </section>
  );
}
