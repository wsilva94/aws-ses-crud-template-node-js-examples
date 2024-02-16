# AWS SES Email Template CRUD

This project simplifies managing (Create, Read, Update, Delete, and Send) email templates using AWS SES (Amazon Simple Email Service).

# Documentation

https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/ses-examples-sending-email.html

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes. Refer to the deployment section for notes on how to deploy the project on a live system.

### Prerequisites

-   An AWS Account
-   Node.js installed on your local machine

### Installing

Install node modules

`yarn install`

Review your .env file to ensure it contains the necessary environment variables:

`APP_MAIL=`
`AWS_REGION=`
`AWS_ACCESS_KEY_ID=`
`AWS_SECRET_ACCESS_KEY=`

Start the application

`yarn start`

## USE CASE

###### Health Check API - Verify if the application is running:

`curl --location 'http://localhost:3000/health`

###### List templates - List the first 10 email templates:

`curl --location 'http://localhost:3000/ses/template/list/10`

###### Get Template by Name - Retrieve a specific template by its name:

`curl --location 'http://localhost:3000/ses/template/templateName`

###### Create template - Create a new email template:

`curl --location 'http://localhost:3000/ses/template/create' \
--header 'Content-Type: application/json' \
--data '{
    "templateName": "templateName",
    "subjectPart": "",
    "textPart": "",
    "htmlPart": "<h1>you html</h1>"
}`

###### Send Template Email - Send an email using a specified template:

`curl --location 'http://localhost:3000/ses/template/send' \
--header 'Content-Type: application/json' \
--data-raw '{
    "toAddresses": [
        "teste@teste.com"
    ],
    "template": "templateName",
    "templateData": {}
}`

###### Update Template - Update an existing email template:

`curl --location --request PUT 'http://localhost:3000/ses/template/update' \
--header 'Content-Type: application/json' \
--data '{
    "templateName": "templateName",
    "subjectPart": "",
    "textPart": "",
    "htmlPart": "<h1>you html</h1>"
}`

###### Delete template - Delete an email template:

`curl --location --request DELETE 'http://localhost:3000/ses/template/test'`

## Authors

-   **Wander Alves** -- [github](https://github.com/wsilva94)

## License

This project is licensed under the MIT License 
