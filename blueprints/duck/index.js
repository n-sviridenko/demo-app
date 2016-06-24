const s = require('underscore.string');

module.exports = {
  description() {
    return (
      'generates a redux duck\n' +
      'options:\n' +
      '[--bundle] The name of the destination bundle'
    );
  },

  locals(options) {
    return {
      entityPath: options.settings.getSetting('duckPath'),
      bundlePath: s.capitalize(s.camelize(options.entity.options.bundle)),
    };
  },

  fileMapTokens() {
    return {
      __name__: (options) => s.camelize(options.entity.name, true),
      __duck__: (options) => options.settings.getSetting('duckPath'),
      __bundle__: (options) => s.capitalize(s.camelize(options.entity.options.bundle)),
    };
  },
};
