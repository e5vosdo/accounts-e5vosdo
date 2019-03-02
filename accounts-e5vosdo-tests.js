// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by accounts-e5vosdo.js.
import { name as packageName } from "meteor/accounts-e5vosdo";

// Write your tests here!
// Here is an example.
Tinytest.add('accounts-e5vosdo - example', function (test) {
  test.equal(packageName, "accounts-e5vosdo");
});
