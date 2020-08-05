import React, {useState} from 'react';
import Input from "../../components/UI/Input/Input";
import './SignUp.sass'
import Button from "../../components/UI/Button/Button";
import {Link} from "react-router-dom";

const SignUp = () => {
    const[hidePass, hidePassHandler] = useState(false)
    const[focusInput, focusInputHandler] = useState(false)

    const getDataFromInputs = () => {

    }

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

    const lampIcon = <svg width="136" height="136" viewBox="0 0 136 136" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="68" cy="68" r="68" fill="url(#paint0_linear)"/>
        <g>
            <path d="M39.8261 69.565H33.5652C32.7012 69.565 32 68.8654 32 67.9998C32 67.1342 32.7012 66.4346 33.5652 66.4346H39.8261C40.6901 66.4346 41.3913 67.1342 41.3913 67.9998C41.3913 68.8654 40.6901 69.565 39.8261 69.565Z" fill="white"/>
            <path d="M48.078 49.6433C47.6773 49.6433 47.2766 49.4899 46.9714 49.1847L42.5449 44.7567C41.9329 44.1447 41.9329 43.1555 42.5449 42.5435C43.1569 41.9315 44.1462 41.9315 44.7582 42.5435L49.1846 46.9715C49.7966 47.5835 49.7966 48.5727 49.1846 49.1847C48.8794 49.4915 48.4787 49.6433 48.078 49.6433Z" fill="white"/>
            <path d="M68 41.3913C67.136 41.3913 66.4348 40.6917 66.4348 39.8261V33.5652C66.4348 32.6997 67.136 32 68 32C68.864 32 69.5652 32.6997 69.5652 33.5652V39.8261C69.5652 40.6917 68.864 41.3913 68 41.3913Z" fill="white"/>
            <path d="M87.9221 49.6433C87.5214 49.6433 87.1207 49.4899 86.8154 49.1847C86.2034 48.5727 86.2034 47.5835 86.8154 46.9715L91.2419 42.5435C91.8523 41.9315 92.8431 41.9315 93.4551 42.5435C94.0671 43.1555 94.0671 44.1447 93.4551 44.7567L89.0287 49.1847C88.7234 49.4915 88.3228 49.6433 87.9221 49.6433Z" fill="white"/>
            <path d="M102.435 69.565H96.1739C95.3099 69.565 94.6086 68.8654 94.6086 67.9998C94.6086 67.1342 95.3099 66.4346 96.1739 66.4346H102.435C103.299 66.4346 104 67.1342 104 67.9998C104 68.8654 103.299 69.565 102.435 69.565Z" fill="white"/>
            <path d="M67.9999 47.6523C56.7804 47.6523 47.6521 56.7807 47.6521 68.0002C47.6521 76.2176 52.6404 83.621 60.1738 86.764V96.1741H75.826V86.764C83.3594 83.621 88.3478 76.2176 88.3478 68.0002C88.3478 56.7807 79.2194 47.6523 67.9999 47.6523Z" fill="white"/>
            <path d="M64.8695 104H71.1304C73.7239 104 75.826 101.898 75.826 99.3042H60.1738C60.1738 101.898 62.2759 104 64.8695 104Z" fill="white"/>
        </g>
        <defs>
            <linearGradient id="paint0_linear" x1="56.5" y1="18.5" x2="151.6" y2="167.6" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FEB665"/>
                <stop offset="1" stopColor="#F66EB4"/>
            </linearGradient>
        </defs>
    </svg>
    return (
        <div
            className='SignUpContainer'
            style={{backgroundImage: `url('${require('../../images/loginBackground.png')}')`}}
        >
            <form action="">
                <div className="lampIconContainer">
                    {lampIcon}
                </div>
                <legend className='legendStyles'>Welcome</legend>
                <p className='subLegend'>
                    Create your account to get started. After that,
                    you can share books and make friends.
                </p>
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
                    value='sign up'
                />
                <Link to={'/login'} className='linkStyles'>Already have an account?<p>Login</p></Link>
            </form>
        </div>
    );
};

export default SignUp;