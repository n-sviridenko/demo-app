const path = require('path');
const s = require('underscore.string');

module.exports = {
  description() {
    return (
      'generates a dumb (pure) component\n' +
      'options:\n' +
      '[--bundle] The name of the destination bundle\n' +
      '[--enable-state] Adds a state to the component'
    );
  },

  filesPath() {
    return path.join(this.path, this.enableState ? 'stateful' : 'stateless');
  },

  beforeInstall(options) {
    this.enableState = !!options.entity.options['enable-state'];
  },

  locals(options) {
    return {
      entityPath: options.settings.getSetting('dumbPath'),
      bundlePath: s.capitalize(s.camelize(options.entity.options.bundle)),
    };
  },

  fileMapTokens() {
    return {
      __dumb__: (options) => options.settings.getSetting('dumbPath'),
      __bundle__: (options) => s.capitalize(s.camelize(options.entity.options.bundle)),
    };
  },
};
