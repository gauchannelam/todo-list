import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel(transition) {
       return this.get('session').fetch().catch((error) => {
           console.log(error);
   });
 },
 setupController (controller, model) {
   this._super(...arguments)
   // let userID = this.controllerFor('application').get('userID')
   // this.controller.set('userId',userID)
   // console.log('signin',userID);
 },
});
