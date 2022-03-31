import React, {useState} from 'react';
import Reloader from '../../common/loader/loader';
import s from './ProfileInfo.module.css'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataReduxForm from "./ProfileDataForm/ProfileDataForm";


function ProfileInfo({profile,updatePhotoSuccess,isOwner,status,updateStatus,updateInformation}) {
    const [editMode, setEditMode] = useState(false);
    if (!profile) {
        return <Reloader/>
    }
    let onMainPhotosSelected = (e) => {
        if (e.target.files) {
            updatePhotoSuccess(e.target.files[0])
        }
    }
    const onSubmit = (formData) => {
        debugger
        updateInformation(formData).then(
            ()=>{
                setEditMode(false)
            }
        )
       // console.log(formData)


    }

    return <div className={s.content}>
        <div className={s.profileDescription}>
            <img
                src={profile.photos.large || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS78NndbZiK_0eG0HQCpI3zqFvdKfpkJCKSb3dcdpdSofQuOwtucAgSIH9LujQgU-xY7U&usqp=CAU'}
                className={s.photoUrl}/>
            {isOwner && <input type={'file'} onChange={onMainPhotosSelected}/>}


            {editMode ? <ProfileDataReduxForm onSubmit={onSubmit} initialValues={profile}  profile={profile} />
                       :<ProfileData profile={profile} editMode={editMode} isOwner={isOwner} goToEditMode={()=>{setEditMode(true)}}/> }



            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>

    </div>

}
const ProfileData =({profile,isOwner,goToEditMode})=>{
    return <div>
        {/*{!isOwner &&  editMode ?<button>edit</button>:<button onClick={()=>{setEditMode(true)}}>edit</button>}*/}
        {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
        <div>
            <b>Full Name</b>:{profile.fullName}
        </div>
        {/*------------------*/}
        <div>
            <b>looking For A Job</b>:{profile.lookingForAJob? 'yes':'no'}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>My Professional Skills</b>:{profile.lookingForAJobDescription}
            </div>
        }
        {/*------------------*/}
        <div>
            <b>About Me</b>:{profile.aboutMe}
        </div>
        {/*------------------*/}
        <div>
            <b>Contacts</b>:{Object.keys(profile.contacts).map(key=>{
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
        })}
        </div>
        {/*------------------*/}
    </div>
}


const Contact =({contactTitle,contactValue})=>{
    return <div className={s.contacts}><b>{contactTitle}</b>:{contactValue}</div>
}
export default ProfileInfo;