import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import {setAuthUserData,getAuthUserData,LogOut} from './../../redux/auth-reducer'
import {UsersAPI} from '../../api/api'
class HeaderContainer extends React.Component {



    render() {
        return <Header {...this.props}/>
    }
}
const mapStateToProps=(props)=> ({
    isAuth:props.auth.isAuth,
    login:props.auth.login,
})


export default connect(mapStateToProps,{setAuthUserData,getAuthUserData,LogOut})(HeaderContainer);