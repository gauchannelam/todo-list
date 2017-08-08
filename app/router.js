import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.resource('todos', function() {
    this.route('new');
    this.route('edit',{path:'/edit/:todo_id'});
  });
  this.route('sign-up');
  this.route('sign-in');
  this.route('welcome');
  // this.authenticatedRoute('welcome');
  this.route('not-found', { path: '/*path' });
});

export default Router;
