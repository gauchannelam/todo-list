import Ember from 'ember';

export default Ember.Controller.extend({
  userID: '',
  actions: {
      signOut() {
      this.get('session').close();
      this.transitionToRoute('sign-in');
    }
  }
});
