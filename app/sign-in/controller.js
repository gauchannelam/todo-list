import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service('session'),

  actions: {
    signIn(provider) {
      let controller = this;
      this.get('session').open('firebase', {
        provider: provider,
        email: this.get('email') || '',
        password: this.get('password') || '',
      }).then(() => {
        controller.set('email', null);
        controller.set('password', null);
        this.transitionToRoute('todos')
      }, (error) => {
        console.log(error);
      });
    }
  }
});
