# serverless-with-localstack

This project has been generated using the `aws-nodejs-typescript` template from the [Serverless framework](https://www.serverless.com/).
```bash
serverless create --template aws-nodejs-typescript --path serverless-with-localstack
```

## Installation instructions
The `serverless-offline` library was installed using the command:
```bash
serverless plugin install -n serverless-offline
```

And to install the `serverless-dynamodb` library, used to run dynamodb locally, the command was used:
```bash
yarn add serverless-dynamodb
```

After installing `serverless-dynamodb`, you need to run the command below to generate the local dynamodb settings:
```bash
serverless dynamodb install
```

To install the `serverless-localstack` library, use the command:
```bash
yarn add -D serverless-localstack
```

## Run the project

To run the project locally, using serverless-offline and local serverless-dynamodb, use one of the commands:
```bash
yarn start:offline or serverless offline start
```

To run the project using localstack, you first need to upload a Docker container using the localstack image:
```bash
docker-compose up -d
```

And to run the project using localstack, use:
```bash
yarn deploy:localstack or serverless deploy --stage local
```

## Deploy the project

To deploy the project to AWS, you need to set up an IAM user via the console, and configure it locally using the command:
```bash
serverless config credentials -o --provider aws --key=KEY --secret SECRET
```

To check the data of the account connected to the session, use:
```bash
aws sts get-caller-identity
```

To deploy the project, use:
```bash
yarn sls:deploy or serverless deploy
```

Finally, to remove the AWS functions, use:
```bash
yarn sls:remove or serverless remove
```