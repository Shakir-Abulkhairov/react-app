import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {updateStatus} from "../../../redux/profilePage-reducer";


const profileStatus =(props)=>{
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    let activateEditMode=(props)=>{
        setEditMode(true)
    }
    let deactivateEditMode=()=>{
        setEditMode(false)
        props.updateStatus(status)
    }
    let onStatusChange=(e)=>{
        setStatus(e.currentTarget.value)
    }
    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);
        return <>
            { !editMode &&
                <div>
                  <b>status:</b>  <span onDoubleClick={activateEditMode}>{status || '---'}</span>

                </div>
            }
            {editMode &&
                <div>
                    <input value={status} onBlur={ deactivateEditMode} autoFocus={true} onChange={onStatusChange}/>
                </div>
            }
        </>
    }


let mapStateToProps =(state)=>({
    status:state.profilePage.status
})
export default connect(mapStateToProps,{updateStatus})(profileStatus)