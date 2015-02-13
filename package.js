'use strict';

Package.describe({
  name: 'csats:meteor-npm-csv-parse',
  summary: 'Wrapper for csv-parse npm package',
  version: '1.0.0',
  git: 'https://github.com/csats/meteor-npm-csv-parse'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'lib/csv-parse.js',
  ], 'server');
  api.export('CSVParse');
});

Npm.depends({
  'csv-parse': '0.0.6'
});
