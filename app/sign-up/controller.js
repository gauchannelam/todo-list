import Ember from 'ember';
import firebase from 'firebase';
export default Ember.Controller.extend({
firebaseApp: Ember.inject.service(),
session: Ember.inject.service('session'),

  actions: {
    signUp(email, pass) {
    const fb = this.get('firebaseApp');
    fb.auth().createUserWithEmailAndPassword(email, pass).then((userResponse) => {
        var user = this.store.createRecord('user',{
          email: email,
          password: pass,
        });
    user.save();
    const userID = this.get('session').get('uid');
    console.log('userID',userID);
    // this.transitionToRoute('sign-in')
});
},
signupGoogle(){
    var provider = new firebase.auth.GoogleAuthProvider();

}
  }
});
