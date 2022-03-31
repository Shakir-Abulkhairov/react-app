import React from 'react';
//import MyPost from './MyPost/Post/MyPost';
import MyPostContainer from './MyPost/Post/MyPostContainer';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {updateInformation, updatePhotoSuccess} from "../../redux/profilePage-reducer";
const Profile = (props) => {
  
    return <div className={s.content}>
      <ProfileInfo isOwner ={!props.match.params.userId}
          profile={props.profile} socialNetworks={props.socialNetworks} isAuth={props.isAuth}
          status={props.status}  updateStatus={props.updateStatus}
                   updatePhotoSuccess={props.updatePhotoSuccess} updateInformation={props.updateInformation}/>
      <MyPostContainer/> 
    </div>
}

export default Profile;