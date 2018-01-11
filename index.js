
var nconf = require('nconf');

// overrides: cli -> env -> file
nconf.argv().env().file({file: __dirname + '/../../config.json'});

// will get the value or throw an error if one doesnt exist
nconf.vet = function(key) {
  var val = nconf.get(key);
  if (val === void 0) {
    throw new Error('Config [' + key + '] is invalid.');
  }
  return val;
};

// will get or init the value
nconf.git = function(key, value) {
  var val = nconf.get(key);
  if (val === void 0) {
    nconf.set(key, value);
    return value;
  }
  return val;
};

module.exports = nconf;
