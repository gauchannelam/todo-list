import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
   todo(){
    var title = this.get('title');
    var body = this.get('body');
    var date = this.get('date');

    var newtodo = this.store.createRecord('todo',{
      title: title,
      body: body,
      date: new Date(date)
    });
    newtodo.save();

    this.setProperties({
      title: "",
      body: "",
      date:""
    });
  }
}
});
