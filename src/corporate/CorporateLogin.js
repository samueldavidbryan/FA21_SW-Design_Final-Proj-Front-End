import React, {useState} from 'react';
import UserPool from "../utilities/CorporateUserPool"
import {CognitoUser, AuthenticationDetails} from 'amazon-cognito-identity-js';
import Corporate from '../pages/Corporate';

const CorporateLogin = () => {
    const [verified, setVerified] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onSubmit = (e) => {
        e.preventDefault();

        const user = new CognitoUser({
            Username: email,
            Pool: UserPool
        });

        const authDetails = new AuthenticationDetails({
            Username: email,
            Password: password
        });

        user.authenticateUser(authDetails, {
            onSuccess: (data) => {
                console.log("onSucess: ", data);
                setVerified(true); 
            },
            onFailure: (err) => {
                console.log("onFailure: ", err)
            },
            newPasswordRequired: (data) => {
                console.log("NewPasswordRequired: ", data);
                setVerified(true); 
            }    
        });
        
    }

    return (
        <div>
            <form onSubmit = {onSubmit}>
                <label htmlFor="email">Username</label>
                <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}>
                </input>
                <label htmlFor="password">Password</label>
                <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}>
                </input>

                <button type="submit">Login</button>
            </form>
            <div>
                {verified && <Corporate/>}
                {/* TODO: REMOVE !NOT */}
            </div>
        </div>

    
    );

};

export default CorporateLogin;