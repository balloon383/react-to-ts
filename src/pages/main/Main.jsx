import React from 'react'
import style from './style.module.css'
import Post from './post/Post';
import { useSelector } from 'react-redux';

export default function Main() {
  const posts = useSelector(store => store.posts)

  
  return (
    <section className={style.main}>
      <section className={style.content__container}>{posts.map(res => <Post post={res} key={ res.id } />)}</section>
    </section>
  );
}
