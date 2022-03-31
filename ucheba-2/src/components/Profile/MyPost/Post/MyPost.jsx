import React from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form'
import { required ,maxLengthCreator} from '../../../utils/validators/validators';
import { Textarea } from '../../../common/loader/FormsControls/FormControls';

const maxLength10 = maxLengthCreator(10)

const addNewPostForm =(props)=>{

  return <>
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field  component={ Textarea } name='newPostText' placeholder='enter your post'   validate={[required, maxLength10]} />
      </div>
      <div>
        <button >add post</button>
      </div>
    </form>
  </>
}
const AddMyPostReduxForm  = reduxForm({form: 'addPostForm'})(addNewPostForm)



const MyPost = (props) => {
 console.log('render')
  let postsElements = [...props.posts].reverse().map(m=> <Post key={m.id}message= {m.message} likecounts ={m.id} />)
  
   
  let addNewPost = (values) =>{
    props.addUser(values.newPostText);
  }
 
  return (
    <div className={s.content}>
      <div className={s.item}>
        <AddMyPostReduxForm onSubmit={addNewPost} />
        <div className={s.postUser}>
          {postsElements}
        </div>
        <div>
        </div>
      </div>
    </div>
    )
}

export default MyPost;