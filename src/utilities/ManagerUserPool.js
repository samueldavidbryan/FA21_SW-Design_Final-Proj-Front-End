import {CognitoUserPool} from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: "us-east-1_TtPWtXWCt",
    ClientId: "68pf4nbk8bm3ramvd0deaahmig",
}

export default new CognitoUserPool(poolData);