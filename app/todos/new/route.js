import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
     todo(){
      let _this = this;
      let controller = this.controller;
      var title = controller.get('title');
      var body = controller.get('body');
      var date = controller.get('date');
      let userID = _this.controllerFor('application').get('userID')
      console.log('userID',userID);
      var newtodo = _this.store.createRecord('todo',{
        title: title,
        body: body,
        userID:userID,
        date: new Date(date)
      });
      newtodo.save();

      _this.setProperties({
        title: "",
        body: "",
        date:""
      });
    }
  }
});
