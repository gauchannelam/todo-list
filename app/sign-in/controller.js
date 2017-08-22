import Ember from 'ember';
import firebase from 'firebase';

export default Ember.Controller.extend({
    session: Ember.inject.service('session'),
    userID: '',
    actions: {
      signIn(provider) {
        let controller = this;
        let userID = this.get('userID')
        console.log('userID',userID);
        this.get('session').open('firebase', {
          provider: provider,
          email: this.get('email') || '',
          password: this.get('password') || '',
        }).then(() => {
          controller.set('email', null);
          controller.set('password', null);
          const userID = this.get('session').get('uid');
          console.log('userID',userID);
          this.transitionToRoute('todos',{ queryParams: { userID: userID }})
        }, (error) => {
          console.log(error);
        });
    },

}
});
