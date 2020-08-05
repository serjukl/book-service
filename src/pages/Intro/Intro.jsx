import React, {useState} from 'react';
import './Intro.sass'
import { useSwipeable } from 'react-swipeable'
import {Link, useHistory} from "react-router-dom";

const Intro = () => {
    let history = useHistory();
    const[countSlides, countSlidesHandler] = useState(1)
    const setIntroPass = (link) => {
        localStorage.setItem('ic','1')
        history.push(link)
    }
    const nextIcon = <svg
        onClick={() => countSlides < 3 ? countSlidesHandler(countSlides + 1) : setIntroPass(localStorage.getItem('ic') ? '/login' : '/')}
        width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="24" fill="url(#paint0_linear)"/>
        <path d="M14 24H34" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
        <path d="M27 31L34 24L27 17" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"/>
        <defs>
            <linearGradient id="paint0_linear" x1="22.5524" y1="-37.7143" x2="132.583" y2="40.9915" gradientUnits="userSpaceOnUse">
                <stop stopColor="#BAFB67"/>
                <stop offset="1" stopColor="#00D23A"/>
            </linearGradient>
        </defs>
    </svg>

    const Bullets = () => {
        return (
            <div className="bullets">
                <div className="bullet"
                     onClick={() => countSlidesHandler(1)}
                     style={{
                    width: countSlides === 1 ? '24px' : '12px',
                    opacity: countSlides === 1 ? '1' : '.24',
                    transition: '.3s'
                }}/>
                <div className="bullet"
                     onClick={() => countSlidesHandler(2)}
                     style={{
                    width: countSlides === 2 ? '24px' : '12px',
                    opacity: countSlides === 2 ? '1' : '.24',
                    transition: '.3s'
                }}/>
                <div className="bullet"
                     onClick={() => countSlidesHandler(3)}
                     style={{
                    width: countSlides === 3 ? '24px' : '12px',
                    opacity: countSlides === 3 ? '1' : '.24',
                    transition: '.3s'
                }}/>
            </div>
        )
    }

    const handlers = useSwipeable({
        onSwipedLeft: () => slide('left'),
        onSwipedRight: () => slide('right'),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    })
    const slide = dir => {
        if (dir === 'right' && countSlides > 1) {
            countSlidesHandler(countSlides - 1)
        }
        if (dir === 'left' && countSlides < 3) {
            countSlidesHandler(countSlides + 1)
        }
    }
    return (
        <div className="slider"  {...handlers} >
            <div className="slide" style={{
                backgroundImage: `url('${require('../../images/indexBackground1.png')}')`,
                zIndex: countSlides === 1 ? '2' : null,
                opacity: countSlides === 1 ? '1' :'0'
            }}
            >
                <img src={require('../../images/indexBookIcon1.png')} alt=""/>
                <h1>Read Books</h1>
                <p>
                    Create your account to get started. After that,
                    you can share books and make friends.
                </p>
                <div className="navSliderContainer">
                    <Bullets />
                    {nextIcon}
                </div>
                <Link to={'/login'}>Skip now</Link>
            </div>
            <div className="slide" style={{
                backgroundImage: `url('${require('../../images/indexBackground2.png')}')`,
                zIndex: countSlides === 2 ? '2' : null,
                opacity: countSlides === 2 ? '1' :'0'
            }}>
                <img src={require('../../images/indexBookIcon2.png')} alt=""/>
                <h1>Review Them</h1>
                <p>
                    Create your account to get started. After that,
                    you can share books and make friends.
                </p>
                <div className="navSliderContainer">
                    <Bullets />
                    {nextIcon}
                </div>
                <Link onClick={() => setIntroPass(localStorage.getItem('ic') ? '/' : '/login')}
                      to={localStorage.getItem('ic') ? '/' : '/login'}
                >Skip now</Link>
            </div>
            <div className="slide" style={{
                backgroundImage: `url('${require('../../images/indexBackground3.png')}')`,
                zIndex: countSlides === 3 ? '2' : null,
                opacity: countSlides === 3 ? '1' :'0'
            }}>
                <img src={require('../../images/indexBookIcon3.png')} alt=""/>
                <h1>Share, Make Friends</h1>
                <p>
                    Create your account to get started. After that,
                    you can share books and make friends.
                </p>
                <div className="navSliderContainer">
                    <Bullets />
                    {nextIcon}
                </div>
                {
                    localStorage.getItem('ic')
                        ? <Link to={'/'}>Skip now</Link>
                        : <Link to={'/login'}>Skip now</Link>
                }
            </div>
        </div>
    );
};

export default Intro;