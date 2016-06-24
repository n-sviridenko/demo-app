const s = require('underscore.string');

module.exports = {
  description() {
    return (
      'generates a functional layout component\n' +
      'options:\n' +
      '[--bundle] The name of the destination bundle'
    );
  },

  locals(options) {
    return {
      entityPath: options.settings.getSetting('layoutPath'),
      bundlePath: s.capitalize(s.camelize(options.entity.options.bundle)),
    };
  },

  fileMapTokens() {
    return {
      __layout__: (options) => options.settings.getSetting('layoutPath'),
      __bundle__: (options) => s.capitalize(s.camelize(options.entity.options.bundle)),
    };
  },
};
