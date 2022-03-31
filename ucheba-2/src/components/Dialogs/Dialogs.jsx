import React from 'react';
import { Field, reduxForm } from 'redux-form'
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import MessageText from './Message/Message';
import {maxLengthCreator, required} from "../utils/validators/validators";
import {Textarea} from "../common/loader/FormsControls/FormControls";
const maxLength20 = maxLengthCreator(20)
const AddMessageForm = (props)=>{

  return <>
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={ Textarea } name='newDialog' placeholder='enter your message' validate={[required, maxLength20]}></Field>
      </div>
      <div>
        <button >ADD POST</button>
      </div>
    </form>
  </>
}
const AddMessageReduxForm  = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

const Dialogs = (props) => {
  
  let state = props.dialogsPage;

  let dialogs = state.dialog.map( d=> <DialogItem name= {d.name} id= {d.id} key= {d.id}/> ) ;
  let user = state.userMessageData.map( m=><MessageText message={m.message} /> );
  let  newDialogText = state.newDialogText;

  let addDialogElement = React.createRef();


  let addNewMessage=(values)=> {
    props.addDialogs(values.newDialog)
  }
  return(
    <div className={s.Dialogs}>
      <div className={s.Dialog}>
        {dialogs}
      </div>
      <div className={s.message}>
        {user}
        <AddMessageReduxForm onSubmit={addNewMessage}/>
        <div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;
