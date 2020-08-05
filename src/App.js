import React from 'react';
import './App.sass'
// import Navigation from "./components/Navigation/Navigation";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Redirect,
    // useHistory,
    // useLocation
} from "react-router-dom";
import Intro from "./pages/Intro/Intro";
import LogIn from "./pages/LogIn/LogIn";
import MyBooks from "./pages/MyBooks/MyBooks";
import SignUp from "./pages/SignUp/SignUp";

const App = () => {
    return (
        <div>
            <Router>
                {/*<Navigation />*/}
                <Switch>
                    <Route exact path="/">
                        {
                            localStorage.getItem('ic')
                                ? <MyBooks />
                                : <Intro

                                />
                        }
                    </Route>
                    <Route exact path="/login">
                        <LogIn

                        />
                    </Route>
                    <Route exact path="/signup">
                        <SignUp

                        />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;