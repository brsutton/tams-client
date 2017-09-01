import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
class UserList extends Component{
createUserListItems(){
return this.props.assignments.map((assignment)=>{
return <li
key={user.id}
onClick={()=>this.props.SelectedUser(user)}>
{user.first} - {user.last}</li>
})
}
render(){
return(
<ul>
{this.createUserListItems()}
</ul>
)
}
}
function mapStateToProps(state){
return{
users:state.users
}
}
function matchDispatchToProps(dispatch){
return bindActionCreators(
{SelectedUser:SelectedUser},dispatch
)
}
