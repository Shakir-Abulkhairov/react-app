import React from 'react';
import { NavLink } from 'react-router-dom';
import Friend from './friends/friends';
import  s from'./Navbar.module.css';
const Navbar = (props) => {
   
   
 
   
    return (
        
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/Profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Dialogs' activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Users' activeClassName={s.activeLink}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/News' activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Music' activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Settings' activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Todo' activeClassName={s.activeLink}>todo</NavLink>
            </div>
          
            
        </nav>
        //<Friend Friends = {props.state.Friends}/>||||||
    )
}

export default Navbar;