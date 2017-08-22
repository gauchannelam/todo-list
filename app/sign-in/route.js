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
 actions: {
     signinGoogle(){
         // var route = this,
            let controller = this.controllerFor('sign-in');
         // // The provider name is passed to `open`
         this.get('session').open('google').then(()=>{
           this.transitionToRoute('todos');
         }, function(error){
         //   controller.set('error', 'Could not sign you in: '+error.message);
         });
     }
 }
});
