'use strict';

function PhoneListController(/* someThing */) {
  this.phones = [
    {
      name: 'Nexus S',
      snippet: 'Fast just got faster with Nexus-S.'
    }, {
      name: 'Motorola XOOM™ with Wi-Fi',
      snippet: 'The Next, Next Generation tablet.'
    }, {
      name: 'MOTOROLA XOOM™',
      snippet: 'The Next, Next Generation tablet.'
    }
  ];
}
PhoneListController.prototype.$inject = [/* 'someThing' */];

var componentName = 'phoneList';

var template =
  '<ul>' +
    '<li ng-repeat="phone in $ctrl.phones">' +
      '<span>{{phone.name}}</span>' +
      '<p>{{phone.snippet}}</p>' +
    '</li>' +
  '</ul>';

/*
 * Export this as an object for easy consumption by require(...)
 * We put the componentName in here too so that we "force" people
 * to require the component before they can use it in angular's
 * dependency injection. Otherwise webpack doesn't know it needs included.
 * This should work for all AngularJS 1.x injectables, like Modules,
 * Resources, Services, etc.
 */
module.exports = {
  controller: PhoneListController,
  template: template,
  componentName: componentName
};
