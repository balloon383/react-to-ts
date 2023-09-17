import React from 'react'
import style from './style.module.css'
import Post from './post/Post';

export default function Main() {

  const posters = [
    {
      id: "1",
      name: "Anton",
      role: "poster",
      posts: [
        {
          postContent: "lorem ipsum content",
          postId: 1,
          postComments: [
            { commentContent: "lorem ipsum comment", commentId: 312 },
            { commentContent: "lorem ipsum comment4123124", commentId: 342 },
          ],
        },
      ],
    },
    {
      id: "5",
      name: "Anton5",
      role: "poster",
      posts: [
        {
          postContent: "lorem ipsum content123124",
          postId: 12,
          postComments: [
            { commentContent: "lorem ipsum comment5234", commentId: 3122 },
          ],
        },
      ],
    },
  ];
  
  let posts = posters.map((res) => {
    return res.posts
  }).reduce((acc, cur) => { return acc.concat(cur) })
  
  return (
    <section className={style.main}>
      <section className={style.content__container}>{posts.map(res => <Post post={res} key={ res.postId } />)}</section>
    </section>
  );
}
