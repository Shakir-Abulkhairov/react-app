import React from 'react';
import Profile from './Profile'
import {connect} from 'react-redux'
import * as axios from 'axios';
import {
    setUserProfile,
    setSocialNetworks,
    profileThunk,
    getStatus,
    updateStatus,
    updatePhotoSuccess, updateInformation
} from './../../redux/profilePage-reducer'
import { withRouter } from 'react-router';
import { Redirect } from 'react-router';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

//setInfoAboutUser  
class ProfileContainer extends React.Component {
    refreshProfile=()=>{ //что бы код не захломлять,создадим функцию,с меотодом которым ранее писали в componentDidMount
        debugger
        let userId = this.props.match.params.userId;// приходит благодаря подключенному withRoute именно match.params и тд
        if (!userId) {//!допустимо что бы Ui работал BLL адресами,поэтому не запихал в thunki
            userId = this.props.authorizedUserId;
            if (!userId){
                this.props.history.push('/login')
            }
        }
        this.props.profileThunk(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

  componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.match.params.userId !=prevProps.match.params.userId){
          this.refreshProfile()
      }
  }

    render(){
      return (
      <Profile isOwner ={this.props.match.params.userId}
          {...this.props} profile={this.props.profile} socialNetworks={this.props.socialNetworks} isAuth={this.props.auth}
      status={this.props.status}  updateStatus={this.props.updateStatus}
               updatePhotoSuccess={this.props.updatePhotoSuccess} updateInformation={this.props.updateInformation}/>
      )
   }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
//export default compose(
//  connect(mapStateToProps,{setUserProfile,setSocialNetworks,profileThunk}),
//  withRouter,
//  withAuthRedirect
//)(ProfileContainer)

let mapStateToProps = (state) =>({
    profile:state.profilePage.profile,
    //aboutUser:state.profilePage.about,
    socialNetworks:state.profilePage.socialNetworks,
    status:state.profilePage.status,
    authorizedUserId:state.auth.userId
})

let withUrlDataContainerComponent = withRouter(AuthRedirectComponent)//withRouter дает дополнительные данные в url такие как match.params и тд
export default connect(mapStateToProps,{setUserProfile,setSocialNetworks,profileThunk,getStatus,updateStatus,updatePhotoSuccess,
    updateInformation})(withUrlDataContainerComponent);