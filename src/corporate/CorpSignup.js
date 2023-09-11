import React, {useState} from 'react';
import UserPool from "../utilities/CorporateUserPool"

const CorpSignup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();

        UserPool.signUp(email, password, [], null, (err, data) => {
            if (err) {
                console.error(err);
            }

            console.log(data);
        })

        
    }

    return (
        <div classname = 'layout'>
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

                <button type="submit">Sign up</button>
            </form>
        </div>
    );

};

export default CorpSignup;