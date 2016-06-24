const camelize = require('underscore.string/camelize');

module.exports = {
  description() {
    return 'generates a blueprint and definition';
  },

  fileMapTokens() {
    return {
      __name__: (options) => camelize(options.entity.name, true),
    };
  },
};
