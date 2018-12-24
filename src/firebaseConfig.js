import firebase from 'firebase'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyDX8OWYaDP3s-5MfCSGNBOX4bzjrXS3RB4",
    authDomain: "projeto-estudo-86170.firebaseapp.com",
    databaseURL: "https://projeto-estudo-86170.firebaseio.com",
    projectId: "projeto-estudo-86170",
    storageBucket: "projeto-estudo-86170.appspot.com",
    messagingSenderId: "610992691384"
  };
firebase.initializeApp(config)

// utilidades do firebase
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// correção de um erro do firestore (sugerido pelo proprio firebase)
const settings = {
    timestampsInSnapshots: true
}
db.settings(settings)

// collections do firebase (bancos de dados)
const produtosCollection = db.collection('produtos')
const selectsCollection = db.collection('selects').doc('selects')

export {
    db,
    auth,
    currentUser,
    produtosCollection,
    selectsCollection
}