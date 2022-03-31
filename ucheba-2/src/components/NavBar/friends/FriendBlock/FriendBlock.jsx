import React from 'react';
import s from './../friends.module.css';

  const FriendBlock =(props) =>{
    return(
        <div className={s.block}>
        <img src={props.img} className={s.img} />
        <p className={s.name}>{props.name}</p>
    </div>
    )
  }

export default FriendBlock;