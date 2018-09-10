import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import Amplify from "aws-amplify";
import config from "./config";

 Amplify.configure({
    Auth: {
        mandatorySignIn: true,
        region: "us-east-1",
        userPoolId: "",
        identityPoolId: "",
        userPoolWebClientId: ""
    },
    Storage: {
        region: "us-east-1",
        bucket: "rek-image-uploads",
        identityPoolId: ""
    }
/*     API: {
        endpoints: [
            {
                name: "",
                endpoint: config.apiGateway.URL,
                region: config.apiGateway.REGION
            },
        ]
    } */
});

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
);
registerServiceWorker();