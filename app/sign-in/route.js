import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function (transition) {
   this._super(...arguments)

   // let session = this.get('session').fetch()
   // debugger;
   // let authenticated = (session) ? session.get('isAuthenticated') : false
   // debugger;
   // console.log('session',session);
   // if(this.get('session.isAuthenticated')){
   //    this.transitionTo('todos');
   //  }

   // if (authenticated) {
   //   this.transitionTo('todos')
   // }
 },
});
