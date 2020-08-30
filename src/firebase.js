import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCe6UGokmPzdLnULUAAriwd7IvKAOJGkX4",
  authDomain: "facebook-messenger-dec35.firebaseapp.com",
  databaseURL: "https://facebook-messenger-dec35.firebaseio.com",
  projectId: "facebook-messenger-dec35",
  storageBucket: "facebook-messenger-dec35.appspot.com",
  messagingSenderId: "551517364093",
  appId: "1:551517364093:web:4f32fbd8096ecad7823614",
  measurementId: "G-7790LVSNWL"
})


const db=firebaseApp.firestore();

export default db