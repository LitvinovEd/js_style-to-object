'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(styles) {
  const result = {};

  const declarations = styles.split(';');

  for (const declaration of declarations) {
    const [key, ...value] = declaration.split(':');

    if (value.length > 0 && key.trim()) {
      result[key.trim()] = value.join(':').trim();
    }
  }

  return result;
}

module.exports = convertToObject;
