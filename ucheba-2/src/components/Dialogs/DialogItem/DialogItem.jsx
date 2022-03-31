import React from 'react';
import s from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) =>{
  return(
    <div className={s.users}>
    <NavLink to=  {'/Dialogs/' + props.id}>{props.name} </NavLink>
  </div>
  )
}

export default DialogItem;