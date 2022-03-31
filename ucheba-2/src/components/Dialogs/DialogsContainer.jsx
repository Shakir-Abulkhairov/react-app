import {addNewDialogCreate} from '../../redux/dialogsPage-reducer'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';
/*
const DialogsContainer = (props) => {
  
  
  return  <StoreContext.Consumer>
              {
                (store)=> {
                  
                  //let state = store.getState().dialogsPage;
 
 
                  let addNewDialog = () => {
                    //let text = addDialogElement.current.value;
                    //props.addDialogs();
                   store.dispatch(addNewDialogCreate());
                   
                  }
                   let NewDialog = (text) => {
                    //let text = addDialogElement.current.value;
                    //props.updateNewDialog(text);
                    //let action = (newDialogCreate(text));
                   store.dispatch(newDialogCreate(text));
                   }

                  return  <Dialogs updateNewDialog={NewDialog}  addDialogs={addNewDialog} dialogsPage={store.getState().dialogsPage} />
                }
              }
           </StoreContext.Consumer>
    

}
*/


let mapStateToProps = (state) => {
  return{
    dialogsPage:state.dialogsPage,
  }
};
let mapDispatchToProps = (dispatch) => {
  return{
    addDialogs:(newDialogText)=>{
      dispatch(addNewDialogCreate(newDialogText));
    },
  }
};
export default compose(
  connect( mapStateToProps, mapDispatchToProps ) ,
  withAuthRedirect
)(Dialogs)



