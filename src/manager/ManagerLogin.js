import React, {useState} from 'react';
import UserPool from "../utilities/ManagerUserPool"
import {CognitoUser, AuthenticationDetails} from 'amazon-cognito-identity-js';
import Manager from '../pages/Manager';

export var store_id; 

const ManagerLogin = () => {
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
                store_id = email;
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
                {verified && <Manager />}
                {/* TODO: REMOVE !NOT */}
            </div>
        </div>

    
    );

};

export default ManagerLogin;