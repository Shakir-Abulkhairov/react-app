import React from 'react';
import s from './../Dialogs.module.css';

const MessageText = (props) =>{
  return (
    <div className={s.users}>
      {props.message}
    </div> 
  )
  }

export default MessageText;
