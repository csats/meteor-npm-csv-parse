# csv-parse Meteor package

This package wraps the [csv-parse npm package](http://csv.adaltas.com/parse/).

## Install

    meteor add csats:csv-parse

## Usage

This package exports `CSVParse`. Example usage of the callback API:

    if (Meteor.isServer) {
      var csvParseSync = Meteor.wrapAsync(CSVParse);
      var output;
      try {
        output = csvParseSync('foo,bar\n1,2', { columns: true });
      } catch (error) {
        throw new Meteor.Error('csv-parse-fail', error.message);
      }
      console.log(output); // [ { foo: '1', bar: '2' } ]
    }

## See also

* <https://github.com/Dsyko/meteor-node-csv>

# License

MIT
