import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Users.module.css';
let User =({followingInProgress,unfollow,follow,user,...props})=> {
    return <div>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                         <img
                             src={user.photos.small != null ? user.photos.small : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS78NndbZiK_0eG0HQCpI3zqFvdKfpkJCKSb3dcdpdSofQuOwtucAgSIH9LujQgU-xY7U&usqp=CAU'}
                             className={styles.userPhoto}/>
                        </NavLink>                    
                    </div>
                    <div>
                        {user.followed
                            ? <button className={styles.button} disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          unfollow(user.id)
                                      }
                                      }>Unfollow</button>
                            : <button className={styles.button} disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          follow(user.id)
                                      }}>Follow</button>}
                    </div>
                </span>
        <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
        <span>
                    
                    <div>{'user.location.country'}</div>
                    <div>{'user.location.city'}</div>
                </span>
    </div>

}

export default User