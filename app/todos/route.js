import Ember from 'ember';

export default Ember.Route.extend({
    model(params){
        console.log('params',params.userID);
        return this.store.query('todo',{
            orderBy: 'userID',
            equalTo: params.userID
        });
    },
    setupController (controller, model) {
      this._super(...arguments)
    //   let _this = this;
}
});
