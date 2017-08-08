import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function (transition) {
   this._super(...arguments)
  
   // debugger
   // let authenticated = (session) ? session.get('isAuthenticated') : false
   // console.log('session',session);
   // if(this.get('session.isAuthenticated')){
   //    this.transitionTo('todos');
   //  }

   // if (authenticated) {
   //   this.transitionTo('todos')
   // }
 },
});
