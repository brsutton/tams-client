import React, {Component} from 'react';

const BatchComponent = (props) => {
    return (
        <option value={props.batch.id}>{props.batch.batchName}</option>
    );
}

export default BatchComponent;