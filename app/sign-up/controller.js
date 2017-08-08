import Ember from 'ember';
import firebase from 'firebase';
export default Ember.Controller.extend({
firebaseApp: Ember.inject.service(),

  actions: {
    signUp(email, pass) {
    const fb = this.get('firebaseApp');
    fb.auth().createUserWithEmailAndPassword(email, pass).then((userResponse) => {
    this.transitionToRoute('sign-in')
});
}
  }
});
