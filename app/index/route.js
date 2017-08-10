import Ember from 'ember';

export default Ember.Route.extend({
//     beforeModel (transition) {
//         let sessionL = this.get('session').fetch().catch((error) => {
//          console.log(error);
//        });
//    },
//     setupController (controller, model) {
//       this._super(...arguments)
//       let _this = this;
//       let uid = this.get('session').get('uid')
//        controller.set('userID',uid)
//       this.controller.set('userID',userID)
//       console.log('index',userID);
// },
// actions: {
//   signIn(provider) {
//     let controller = this;
//     this.controller.get('session').open('firebase', {
//       provider: provider,
//       email: this.get('email') || '',
//       password: this.get('password') || '',
//     }).then(() => {
//       controller.set('email', null);
//       controller.set('password', null);
//       this.transitionToRoute('todos',{ queryParams: { userID: userID }})
//     }, (error) => {
//       console.log(error);
//     });
//   }
// }
});
