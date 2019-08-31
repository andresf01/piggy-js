import * as firebase from 'firebase'

const config = {
    apiKey: "api-key",
    authDomain: "project-id.firebaseapp.com",
    databaseURL: "https://project-id.firebaseio.com",
    projectId: "project-id",
    storageBucket: "project-id.appspot.com",
}

firebase.initializeApp(config)

const database = firebase.database()

export { database as default }