import _ from 'underscore';

/**
 * Returns a parsed URL
 * @param {string} url
 * @param {...string} keys - The keys that will be picked
 * @returns {Object}
 */
export function parse(url, ...keys) {
  const link = document.createElement('a');
  link.href = url;

  const urlObject = {
    scheme: link.protocol,
    host: link.hostname,
    port: link.port ? parseInt(link.port, 10) : null,
    path: link.pathname,
    query: link.search ? link.search.substr(1) : null,
    hash: link.hash ? link.hash.substr(1) : null,
  };

  return keys.length ? _.pick(urlObject, ...keys) : urlObject;
}

/**
 * Builds an URL
 * @param {Object} urlObject
 * @returns {string}
 */
export function build(urlObject) {
  const { scheme, host, port, path, query, hash } = urlObject;

  const rawHost = port ? `${host}:${port}` : host;
  const rawQuery = query ? `?${query}` : '';
  const rawHash = hash ? `#${hash}` : '';

  return `${scheme}//${rawHost}${path}${rawQuery}${rawHash}`;
}

/**
 * Merges the baseUrl and overrideUrl
 * @param {string} baseUrl
 * @param {string|Object} overrideUrl
 * @param {...string} keys - The keys that will be picked from the overrideUrl
 * @returns {string}
 */
export function merge(baseUrl, overrideUrl, ...keys) {
  const baseUrlObject = parse(baseUrl);
  let overrideUrlObject;

  if (_.isObject(overrideUrl)) {
    overrideUrlObject = keys.length ? _.pick(overrideUrl, ...keys) : overrideUrl;
  } else {
    overrideUrlObject = parse(overrideUrl, ...keys);
  }

  return build({ ...baseUrlObject, ...overrideUrlObject });
}

export default {
  parse,
  build,
  merge,
};
