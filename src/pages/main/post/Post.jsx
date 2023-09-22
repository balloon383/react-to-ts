import React, { useState } from "react";
import style from "./style.module.css";
import { Button } from "@mui/material";

export default function Post({ post }) {

    const [user, setUser] = useState({ name: "Newbie", role: "commenter" });
    
    return (
      <section className={style.post}>
        <ul className={style.postList}>
          <li className={style.header}>Post ID: {post.id}</li>
          <li className={style.content}>Post Content: {post.postContent}</li>
          <li className={style.comments}>
            <p className={style.paragraph}>Post comments:</p>
            <ul className={style.commentsBox}>
              {post.postComments.length > 0 ? post.postComments.map((res) => (
                <li className={style.comments} key={res.commentId}>
                  Comment ID: {res.commentId} <br />
                  Comment: {res.commentContent}
                </li>
              )) : <li>no comments yet</li>}
            </ul>
          </li>
          <li
            className={
              user.role === "commenter" ? style.displayBlock : style.displayNone
            }
          >
            <Button variant="contained" color="success">
              Comment
            </Button>
          </li>
        </ul>
      </section>
    );
}
