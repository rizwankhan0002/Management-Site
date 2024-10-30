import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDy5LD4x-nc1Oekevk2b6rxbhSHEPtBdMo",
    authDomain: "thedojosite-b5c6c.firebaseapp.com",
    projectId: "thedojosite-b5c6c",
    storageBucket: "thedojosite-b5c6c.appspot.com",
    messagingSenderId: "984125292006",
    appId: "1:984125292006:web:81eacce19e0a6b2482ea27"
  }

  // init firebase

  firebase.initializeApp(firebaseConfig)

  // init services
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  const projectStorage = firebase.storage()

  // timestamp
  const timestamp = firebase.firestore.Timestamp

  export { projectFirestore, projectAuth, projectStorage, timestamp }