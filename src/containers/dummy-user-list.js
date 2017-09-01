import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
class UserList extends Component{
createUserListItems(){
return this.props.users.map((user)=>{
return <li key={user.id}>{user.firstName}</li>
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
export default connect(mapStateToProps)(UserList);