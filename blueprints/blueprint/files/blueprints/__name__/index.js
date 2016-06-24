const path = require('path');

module.exports = {
  locals(options) {
    // Return custom template variables here.
    return {};
  },

  fileMapTokens(options) {
    // Return custom tokens to be replaced in your files
    return {
      // logic to determine value goes here
      __token__: (options) => 'value',
    };
  },

  // Should probably never need to be overriden

  filesPath() {
    return path.join(this.path, 'files');
  },

  beforeInstall(options) {},

  afterInstall(options) {},
};
