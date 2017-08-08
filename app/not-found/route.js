import Ember from 'ember';
export default Ember.Route.extend({
  redirect: function () {
    var url = this.router.location.formatURL('/not-found');
    if (window.location.pathname !== url) {
      this.transitionTo('/not-found');
    }
},
actions: {
  error: function (error) {
    Ember.Logger.error(error);
    this.transitionTo('/not-found');
  }
}

});
