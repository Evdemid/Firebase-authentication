import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
      apiKey: "AIzaSyCqN6ChPA4S5NifsL7jWpEE6XMKqcYx_u0",
      authDomain: "fir-4reactapp.firebaseapp.com",
      databaseURL: "https://fir-4reactapp.firebaseio.com",
      projectId: "fir-4reactapp",
      storageBucket: "fir-4reactapp.appspot.com",
      messagingSenderId: "1065345391177",
      appId: "1:1065345391177:web:ad140fd32f1a2da06d3d98",
      measurementId: "G-EPF16L2X9T"
};


class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  // *** User API ***

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');
}

export default Firebase;