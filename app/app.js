'use strict';

// Import our styles
require('../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('./app.css');

// Import JS dependencies
var angular = require('angular');
var PhoneList = require('./phone-list.component');

// Define the `phonecatApp` module
angular.module('phonecatApp', []);

// Add the `phoneListComponent` module
angular.module('phonecatApp')
  .component(PhoneList.componentName, {
      template: PhoneList.template,
      controller: PhoneList.controller//,
      //controllerAs: '$ctrl'
  });
