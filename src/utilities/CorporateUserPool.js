import {CognitoUserPool} from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: "us-east-1_w4XuMbWaH",
    ClientId: "3lne6jvb9f75ukaflcuupoep7l",
}

export default new CognitoUserPool(poolData);