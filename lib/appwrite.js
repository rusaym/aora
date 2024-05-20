import { Client } from 'react-native-appwrite'

export const config = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: 'com.rusaym.aora',
  projectId: '664529ab000a928f8330',
  databaseId: '66452ad5002d0467ff8c',
  userCollestionId: '66452b000024a4abebf0',
  videoCollectionId: '66452b35002fba28fce1',
  storageId: '66452d670020f9579539',
}

// Init your React Native SDK
const client = new Client()

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform) // Your application ID or bundle ID.
