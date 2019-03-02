Package.describe({
  name: 'accounts-e5vosdo',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: 'git@github.com:e5vosdo/accounts-e5vosdo.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.8.0.2');
  api.use('ecmascript');
  api.mainModule('accounts-e5vosdo.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('accounts-e5vosdo');
  api.mainModule('accounts-e5vosdo-tests.js');
});
