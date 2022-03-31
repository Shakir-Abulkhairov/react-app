import {connect} from 'react-redux'
//import { followAC, setUserAC, unfollowAC , setCurrentPageAC, setTotalUsersCountAC , toggleIsFetchingAC} from '../../redux/users-reducer';
import { follow, unfollow , setCurrentPage,toggleFollowingProgress,requestUsers} from '../../redux/users-reducer';
import Users from './Users';
import React from 'react'
import Reloader from '../common/loader/loader';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';
import {
    getCurrentPage,
    getFetching, getFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers,
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
    //constructor(props) {
    //  super(props); //! синтаксис такой или хзбвроде писать такбно лучше прочитать об этом 
    //} //? можно не писать если стоит просто супер,оно это сделает автоматом 
      componentDidMount() { 
        this.props.getUsers(this.props.currentPage,this.props.pageSize)
    };
     
      onPageChanged =(pageNumber) => {
        this.props.getUsers(pageNumber,this.props.pageSize)
      }
  
  render() {
      return <> {/*фейк заглушка*/}
      {this.props.isFetching?
       <Reloader/>
      :null}
      <Users totalUsersCount={this.props.totalUsersCount}
              pageSize={this.props.pageSize}
              currentPage={this.props.currentPage}
              onPageChanged={this.onPageChanged}
              users={this.props.users}
              unfollow={this.props.unfollow}
              follow={this.props.follow}
              followingInProgress={this.props.followingInProgress} />
      </>
      }
  }
  

let mapStateToProps = (state) =>{
    return {
        users:getUsers(state),
        pageSize:getPageSize(state),
        totalUsersCount:getTotalUsersCount(state),
        currentPage:getCurrentPage(state),
        isFetching:getFetching(state),
        followingInProgress:getFollowingInProgress(state),
    }
};

//let mapDispatchToProps = (dispatch) => {
//    return{
//        follow:(userId) =>{
//            dispatch(followAC(userId));
//        },
//            
//        unfollow:(userId) =>{
//            dispatch(unfollowAC(userId));
//        },
//        setUsers:(users) =>{
//            dispatch(setUserAC(users));
//        },
//        setCurrentPage:(pageNumber) =>{
//            dispatch(setCurrentPageAC(pageNumber));
//        },
//        setTotalUsersCount:(totalCount) =>{
//            dispatch(setTotalUsersCountAC(totalCount));
//        },
//        toggleIsFetching:(isFetching)=>{
//            dispatch(toggleIsFetchingAC(isFetching))
//        }
//
//    }
//}
export default compose(
  connect(mapStateToProps, {
    follow, unfollow, setCurrentPage, toggleFollowingProgress
    , getUsers: requestUsers
}),

)(UsersContainer)
//////export default  withAuthRedirect(connect(mapStateToProps, {
// //   follow, unfollow, setCurrentPage, toggleFollowingProgress
// //   , requestUsers
////}(UsersContainer))
//!сократил,и убрал AC в конце,followAC = follow
//!теперь раз одиноковые названия,то сократив вот так: follow:follow = follow без присваивания 
          