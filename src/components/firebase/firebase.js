import Firebase from 'firebase'

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
};

const firebaseApp = Firebase.initializeApp(config)

// Export the database for components to use.
export const db = firebaseApp.database()