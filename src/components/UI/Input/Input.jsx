import React from 'react';
import './Input.sass'

const Input = props => {
    return (
        <label
            htmlFor={props.name}
            className={props.classname}
            style={props?.focusInput ? {
                color: props.focusInput ? '#8EF15C' : '#384F7D'
            } : null}
        >
            {props.label}
            <input
                type={props.hidePass && props.type === 'password' ? 'text' : props.type}
                placeholder={props.placeholder}
                onChange={(e) => props.onChangeHandler(e,props.name)}
                onFocus={() => props.onFocusHandler()}
                onBlur={() => props.onBlurHandler()}
            />
            <div className="icon" onClick={() => props.hidePassHandler()}>
                {props.icon}
            </div>
        </label>
    );
};

export default Input;