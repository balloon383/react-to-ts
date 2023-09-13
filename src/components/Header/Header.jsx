import React, { useState } from 'react'
import style from './style.module.css'
import Button from "@mui/material/Button";

export default function Header() {
  const [userName, setUserName] = useState('Log In')
  const [logOut, setLogOut] = useState('Log Out')
  const [logOutStatus, setLogOutStatus] = useState(false)


  return (
    <section className={style.header}>
      <section className={style.content__container}>
        <ul className={style.unordered}>
          <li>
            <a href="#">LOGO</a>
          </li>
          <li>
            <nav className={style.nav}>
              <Button variant="contained">{userName}</Button>
              <p className={logOutStatus === true ? style.DisplayBlock : style.displayNone}>
                <Button variant="outlined">{logOut}</Button>
              </p>
            </nav>
          </li>
        </ul>
      </section>
    </section>
  );
}
