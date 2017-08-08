import Ember from 'ember';
const {get} = Ember;
export default Ember.Route.extend({
    beforeModel(transition) {
       return get(this, 'session').fetch().catch((error) => {
           console.log(error);
   });
 },
 setupController (controller, model) {
   this._super(...arguments)

   let uid = this.get('session').get('uid')
    controller.set('userID',uid)
   if(this.get('session.isAuthenticated')){
       this.transitionTo('todos')
   }
 },
});
