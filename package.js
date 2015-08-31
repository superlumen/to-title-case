Package.describe({
  name: 'superlumen:to-title-case',
  version: '2.1.0_1',
  // Brief, one-line summary of the package.
  summary: 'Package of To Title Case script',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/superlumen/to-title-case',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('to-title-case.js');
});
