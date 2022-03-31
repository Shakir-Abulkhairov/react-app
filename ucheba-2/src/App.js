import React , { Suspense } from 'react';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import {Route, Switch, withRouter} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/login'
import {connect} from "react-redux";
import {compose} from "redux";
import {InitializeApp} from "./redux/app-reducer";
import Reloader from "./components/common/loader/loader";
import store from "./redux/redux-store";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));


//import DialogsContainer from "./components/Dialogs/DialogsContainer";


class App extends React.Component {
    componentDidMount() {
        this.props.InitializeApp()
    }
    render() {
       if (!this.props.initialized) {
           return <Reloader/>
       }
        return (

            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        {/*<Route path='/Dialogs' render={() => <DialogsContainer/>}/>*/}
                        <Suspense fallback={<div><Reloader /></div>}>
                        <Route path='/Dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/Profile/:userId?' render={() => <ProfileContainer/>}/> {/**/}
                        <Route path='/Users' render={() => <UsersContainer/>}/>
                        <Route path='/Login' render={() => <Login/>}/>
                        <Route path='/News' component={News}/>
                        <Route path='/Music' component={Music}/>
                        <Route path='/Settings' component={Settings}/>
                    </Suspense>
                    </Switch>
                </div>
            </div>
        );
    }
}
let mapStateToProps =(state)=>({
    initialized:state.app.initialized
})
export default compose(
    withRouter (
    connect(mapStateToProps,{InitializeApp})(App)
    )
);