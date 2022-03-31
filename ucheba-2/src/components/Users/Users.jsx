import React from 'react';
import Paginator from "./Paginator";
import User from "./User";
let Users =({currentPage,onPageChanged,pageSize,totalUsersCount,...props})=> {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>

         <Paginator currentPage={currentPage} onPageChanged={onPageChanged} pageSize={pageSize}
               totalUsersCount={totalUsersCount}/>

        {
            props.users.map(u => <User user={u}
                                 follow={props.follow}
                                 key={u.id}
                                 followingInProgress={props.followingInProgress}
                                 unfollow={props.unfollow}/>)
        }

    </div>
    }
export default Users