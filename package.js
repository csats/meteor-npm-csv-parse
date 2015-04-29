'use strict';

Package.describe({
  name: 'csats:csv-parse',
  summary: 'Wrapper for csv-parse npm package',
  version: '1.0.1',
  git: 'https://github.com/csats/meteor-npm-csv-parse'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'lib/csv-parse.js',
  ], 'server');
  api.export('CSVParse');
});

Package.onTest(function(api) {
  api.use('csats:csv-parse');
  api.use('tinytest@1.0.0');
});


Npm.depends({
  'csv-parse': '0.0.6'
});
