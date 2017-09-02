import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
class DeleteAssignmentList extends Component {
    createUserListItems() {
        return this.props.assignments.map((assignment) => {
            return <option key={assignment.id}>
                {assignment.name}</option>
        })
    }
    render() {
        return (
            <select>
                {this.createUserListItems()}
            </select>
        )
    }
}
function mapStateToProps(state) {
    return {
        assignments: state.assignments
    }
}

export default connect(mapStateToProps)(DeleteAssignmentList);