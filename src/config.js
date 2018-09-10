export default {
    MAX_ATTACHMENT_SIZE: 5000000,

    s3: {
        REGION: "us-east-1",
        BUCKET: "rek-image-uploads"
    },
/*     apiGateway: {
        REGION: "YOUR_API_GATEWAY_REGION",
        URL: "YOUR_API_GATEWAY_URL"
    }, */
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_A18qsYd9K",
        APP_CLIENT_ID: "",
        IDENTITY_POOL_ID: "" 
    }
};