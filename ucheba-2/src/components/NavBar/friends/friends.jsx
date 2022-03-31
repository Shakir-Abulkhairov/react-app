import React from 'react';
import FriendBlock from './FriendBlock/FriendBlock';
import  s from'./friends.module.css'
const Friend = (props) => {
 
  let friend = props.Friends.map((f)=> <FriendBlock img = {f.img} name = {f.name}/>)
    return (
        
            <div className={s.container}>
                 <div className ={s.title}>
                     Friends
                 </div>
               {friend}
            </div>
           
    )
}

export default Friend;