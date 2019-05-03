import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('dashboard', function() {
    this.route('index', {path: '/'});
  });
  this.route('tables', function() {
    this.route('index', {path: '/'});
  });
  this.route('patients', function(){
    this.route('patient', {path: '/:patient_id'});
    this.route('index', {path: '/'});
  });
  this.route('encounters', function(){
    this.route('encounter', {path: '/:encounter_id'});
    this.route('index', {path: '/'});
  });
  this.route('observations', function(){
    this.route('observation', {path: '/:observation_id'});
    this.route('index', {path: '/'});
  });

});

export default Router;
