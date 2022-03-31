import {addUserCreate ,

  } from '../../../../redux/profilePage-reducer';
import MyPost from './MyPost';

import {connect} from 'react-redux';



let mapStateToProps =(state)=>{
  return{
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
};

let mapDispatchToProps =(dispatch)=>{
  return{
    addUser:(newPostText)=>{
      dispatch(addUserCreate(newPostText))
    }
  }
};

let MyPostContainer = connect(mapStateToProps,mapDispatchToProps) (MyPost)
  

export default MyPostContainer;