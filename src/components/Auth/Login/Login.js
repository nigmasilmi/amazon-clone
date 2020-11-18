import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../../firebase';


const Login = (props) => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState(null);


    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                if (auth) {
                    history.push('/');
                }
            })
            .catch(err => {
                setErrorMsg(err.message);
            })
    }

    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                console.log(auth);
                if (auth) {
                    history.push('/');
                }
            })
            .catch(err => {
                setErrorMsg(err.message);

            })
    }
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1920px-Amazon_logo.svg.png" alt="amazon logo"></img>
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <small className="login__error">{errorMsg ? errorMsg : null}</small>
                <form>
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Pasword</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button
                        type="submit"
                        className="login_loginButton"
                        onClick={signIn}
                    >Sign in</button>
                </form>
                <p>By singning in you are testing a mock amazon-clone app</p>
                <button
                    className="login_registerButton"
                    onClick={register}
                >Register with your email
                    </button>
            </div>
        </div>
    )
}

export default Login;
