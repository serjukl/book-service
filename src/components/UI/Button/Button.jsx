import React from 'react';
import './Button.sass'

const Button = props => {
    return (
        <button
            type={props.type}
            className={props.classname}
            onClick={() => props.onClickHandler()}
        >
            {props.value}
        </button>
    );
};

export default Button;