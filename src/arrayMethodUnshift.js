'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const items = this;

    items.length += elements.length;

    for (let i = items.length - 1; i >= 0; i--) {
      items[i] = items[i - elements.length];
    }

    for (let i = 0; i < elements.length; i++) {
      items[i] = elements[i];
    }

    return items.length;
  };
}

module.exports = applyCustomUnshift;
