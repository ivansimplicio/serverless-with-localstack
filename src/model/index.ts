import * as AWS from 'aws-sdk';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

export const dynamoDBClient = (): DocumentClient => {
  if (process.env.IS_OFFLINE) {
    return new AWS.DynamoDB.DocumentClient({
      region: 'localhost',
      endpoint: 'http://localhost:5000',
    });
  }

  const LOCALSTACK_HOSTNAME = process.env.LOCALSTACK_HOSTNAME;
  const ENDPOINT = `http://${LOCALSTACK_HOSTNAME}:4566`;
  const CLIENT_CONFIG = LOCALSTACK_HOSTNAME ? { endpoint: ENDPOINT } : {};

  return new AWS.DynamoDB.DocumentClient(CLIENT_CONFIG);
};