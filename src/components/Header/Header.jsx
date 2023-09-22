import React, { useState, useEffect } from 'react'
import style from './style.module.css'
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import { logOutAction } from '../../redux/actions/userActions';
import { getLoggedUser } from '../../api/api';

export default function Header() {
  const [userName, setUserName] = useState('Log In')
  const [logOutStatus, setLogOutStatus] = useState(false)
  const user = useSelector(store => store.user)
  const loggedUser = getLoggedUser()
  const dispatch = useDispatch()

  useEffect(() => {
    if(user.status){
      setUserName(user.name)
      setLogOutStatus(true)
    } 
    if(loggedUser.status === undefined){
      setUserName("Log In")
      setLogOutStatus(false)
    }

  }, [user])

  function logOut(){
    setUserName("Log In")
    setLogOutStatus(false)
    localStorage.clear()
    dispatch(logOutAction())
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
                <Button variant="outlined" onClick={() => logOut()}>Log Out</Button>
              </Link>
                
              </p>
            </nav>
          </li>
        </ul>
      </section>
    </section>
  );
}
