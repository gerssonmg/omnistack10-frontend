import React from 'react';
import './styles.css';

export default function AlertDialog(props) {

    return (
        <div className="alert-div">
            <a>Do you really want to remove this usergithub:: {props.name}?</a>
            <br />
            <button onClick={() => props.onClickYes()}>Confirm</button>
            <button onClick={() => props.onClickNo()}>Cancel</button>
        </div>
    );
}
