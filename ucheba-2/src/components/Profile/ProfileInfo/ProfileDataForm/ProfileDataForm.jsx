import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input} from "../../../common/loader/FormsControls/FormControls";
import {required} from "../../../utils/validators/validators";
import s from './../ProfileInfo.module.css'
import style from "../../../common/loader/FormsControls/FormsControl.module.css";


export const ProfileDataForm =({handleSubmit,profile,error})=>{
    return(
        <form onSubmit={handleSubmit} >
            <div>
                <button  >save</button>

            </div>
            <div>
                <b >Full Name</b>:{createField("FullName","fullName",[required],Input,null) }
            </div>
            {/*------------------*/}

              <div>
                <b>looking For A Job</b>:{createField(null,"lookingForAJob",[],Input,null,{type:'checkbox'},null)}
            </div>

            <div>
                <b>My Professional Skills</b>:{createField("Professional Skills","lookingForAJobDescription",[required],Input,null)}
            </div>

            {/*------------------*/}
            <div>
                <b>About Me</b>:{createField("About Me","aboutMe",[required],'textarea',null)}
            </div>
            {/*------------------*/}
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key=>{
                return <div className={s.contacts} key={key}>
                    <b>{key}: {createField(key,"contacts." +  key,[],Input)}</b>
                </div>
            })}

            </div>
            {error &&  <div className={style.fromSummaryError}>
                {error}
            </div>
            }

        </form>


)
}


const ProfileDataReduxForm  = reduxForm({form: 'editProfile-form'})(ProfileDataForm)

export default ProfileDataReduxForm