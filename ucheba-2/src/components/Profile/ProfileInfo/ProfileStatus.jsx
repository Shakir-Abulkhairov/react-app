import React from 'react';
import {connect} from "react-redux";
import {updateStatus} from "../../../redux/profilePage-reducer";


class profileStatus extends React.Component{
    state={
        status:this.props.status,
        editMode:false
    }
    activateEditMode=()=>{
        this.setState({  editMode:true})
    }
    deactivateEditMode=()=>{
        this.setState({  editMode:false})
        this.props.updateStatus(this.state.status)
    }
    onStatusChange=(e)=>{
        this.setState({status:e.currentTarget.value})
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status != this.props.status){
            this.setState({
                status:this.props.status
            })
        }
    }

    render() {
        return <>
            {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || 'your status'}</span>
                </div>
            }
            {this.state.editMode &&
                <div>
                    <input value={this.state.status} onBlur={this.deactivateEditMode}
                           autoFocus={true} onChange={this.onStatusChange}/>
                </div>
            }
        </>
    }
}
let mapStateToProps =(state)=>({
    status:state.profilePage.status
})
export default connect(mapStateToProps,{updateStatus})(profileStatus)