import React, {useEffect, useState} from 'react';
import './LogIn.sass'
import {Link} from "react-router-dom";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";

const LogIn = () => {
    const[hidePass, hidePassHandler] = useState(false)
    const[focusInput, focusInputHandler] = useState(false)
    const inputs = [
        {
            classname:'defaultInput',
            name:'email',
            label:'email',
            placeholder:'Type your email',
            type:'email',
            icon:null
        },
        {
            classname:'defaultInput',
            name:'password',
            label:'password',
            placeholder:'Type your password',
            type:'password',
            icon:<svg className='eyeIcon' width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.7018 1.75853C16.6175 0.624479 14.3063 1.67707e-07 12.1936 1.67707e-07C10.0809 1.67707e-07 7.76972 0.624479 5.68538 1.75853C3.46871 2.96253 1.72468 4.65112 0.76522 6.50958C0.547806 6.92923 0.694324 7.45379 1.09134 7.6836C1.21423 7.75354 1.35129 7.78851 1.48363 7.78851C1.77194 7.78851 2.05552 7.62365 2.20204 7.33888C3.46871 4.88593 6.14384 3.1224 8.83316 2.2831C7.70355 3.29226 6.98041 4.80599 6.98041 6.49459C6.98041 9.53705 9.31525 12 12.1889 12C15.0673 12 17.3974 9.53206 17.3974 6.49459C17.3974 4.80599 16.679 3.29725 15.5446 2.2831C18.2339 3.1224 20.9091 4.88593 22.1757 7.33888C22.3223 7.62864 22.6058 7.78851 22.8941 7.78851C23.0265 7.78851 23.1588 7.75354 23.2864 7.6836C23.6835 7.45379 23.83 6.92923 23.6126 6.50958C22.6626 4.65112 20.9185 2.96253 18.7018 1.75853ZM12.1936 8.76769C11.0073 8.76769 10.0478 7.75853 10.0431 6.50458C10.0384 5.23564 10.9931 4.22148 12.1936 4.21649C12.2314 4.21649 12.2645 4.21649 12.3023 4.22148C12.2314 4.41132 12.1936 4.62115 12.1936 4.83597C12.1983 5.7552 12.8978 6.49459 13.7675 6.49459C13.9707 6.49459 14.1645 6.45462 14.3441 6.37968C14.3441 6.41465 14.3488 6.44463 14.3488 6.4796C14.3441 7.74854 13.3941 8.7627 12.1936 8.76769Z" fill="#1E1D20" fillOpacity={hidePass ? "0.7" : "0.1"} />
            </svg>
        }
    ]

    const getDataFromInputs = () => {

    }

    useEffect(() => {
        console.log(hidePass)
    },[hidePass])


    return (
        <div className='LogInContainer'
            style={{backgroundImage: `url('${require('../../images/loginBackground.png')}')`}}
        >
            <form action="">
                <legend className='legendStyles'>sign in</legend>
                <div className="inputsContainer">
                    {
                        inputs.map((item, index) => {
                            return(
                                <Input
                                    key={index}
                                    classname={item.classname}
                                    name={item.name}
                                    label={item.label}
                                    placeholder={item.placeholder}
                                    type={item.type}
                                    icon={item.icon}
                                    onChangeHandler={() => getDataFromInputs()}
                                    onFocusHandler={() => focusInputHandler(true)}
                                    onBlurHandler={() => focusInputHandler(false)}
                                    hidePassHandler={() => hidePassHandler(!hidePass)}
                                    hidePass={hidePass}
                                    focusInput={focusInput}
                                />
                            )
                        })
                    }
                </div>
                <Button
                    classname='defaultButton'
                    type='submit'
                    value='sign in'
                />
                <Link to={'/signup'} className='linkStyles'>New here? <p>Create an account</p></Link>
            </form>

        </div>
    );
};

export default LogIn;