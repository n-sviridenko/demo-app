const s = require('underscore.string');

module.exports = {
  description() {
    return (
      'generates a smart (container) component\n' +
      'options:\n' +
      '[--bundle] The name of the destination bundle'
    );
  },

  locals(options) {
    return {
      entityPath: options.settings.getSetting('smartPath'),
      dumbPath: options.settings.getSetting('dumbPath'),
      bundlePath: s.capitalize(s.camelize(options.entity.options.bundle)),
    };
  },

  fileMapTokens() {
    return {
      __smart__: (options) => options.settings.getSetting('smartPath'),
      __bundle__: (options) => s.capitalize(s.camelize(options.entity.options.bundle)),
    };
  },
};
