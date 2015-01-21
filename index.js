var transformWithDetails = require('flowcheck/transform').transformWithDetails;
var loaderUtils = require('loader-utils');

module.exports = function(source) {
  this.cacheable && this.cacheable();

  var sourceFilename = loaderUtils.getRemainingRequest(this);
  var current = loaderUtils.getCurrentRequest(this);

  var transform = transformWithDetails(source, {
    sourceMap: this.sourceMap,
    namespace: "require('flowcheck/assert')"
  });

  if (transform.sourceMap) {
    transform.sourceMap.sources = [sourceFilename];
    transform.sourceMap.file = current;
    transform.sourceMap.sourcesContent = [source];
  }

  this.callback(null, transform.code, transform.sourceMap);
};