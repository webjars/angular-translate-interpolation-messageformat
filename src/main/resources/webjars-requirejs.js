/*global requirejs */

// Ensure any request for this webjar brings in dependencies. For example if this webjar contains
// bootstrap.js which depends on jQuery then you would have the following configuration.
//
requirejs.config({
  shim: {
    'angular-translate-interpolation-messageformat': [ 'webjars!angular-translate.js' ]
  }
});
