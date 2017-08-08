import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel (transition) {
        let sessionL = this.get('session').fetch().catch((error) => {
         console.log(error);
       });
    }
});
