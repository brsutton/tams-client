import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
class AssignmentList extends Component{
createUserListItems(){
return this.props.assignments.map((assignment)=>{
return <li key={assignment.id}>
{assignment.name}</li>
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
assignments:state.assignments
}
}

export default connect(mapStateToProps)(AssignmentList);