'use strict';

// Json
export const json = {};

// Noop
export const noop = () => {};

// Sync
export const sync = (value) => value;

// Get Prototype
export const { defineProperty, prototype } = Object;

// Set Properties
export const properties = {
  // No Enumerable
  enumerable: false,

  // Can Configure
  configurable: true,

  // Can Writable
  writable: true,
};

/**
 * Functional Empty - Check Scope is Empty
 * ======== ======== ========
 * @param scope { json }
 * ======== ======== ========
 */
export const empty = (scope) => [null, undefined].includes(scope);

/**
 * Functional Count - New Ability
 * ======== ======== ========
 */
export const count = () => {
  // Extension Length on Prototype
  Object.defineProperty(prototype, 'count', {
    get() {
      return Object.keys(this).length;
    },
  });
};

/**
 * Functional Make - Api Extension for Json
 * ======== ======== ========
 * @param handler { fn }
 * ======== ======== ========
 */
export const make = (handler, name) => {
  // Use Defined Property
  defineProperty(prototype, name, {
    // Reset Value
    value() {
      // Checking Empty
      if (empty(this)) {
        throw new TypeError('Please check if the JSON is correct for ...');
      }

      // Trigger Handler
      return handler(Object(this), ...arguments);
    },

    // Applies
    ...properties,
  });
};

/**
 * Functional Factory
 * ======== ======== ========
 * @param apis { modules }
 * ======== ======== ========
 */
export const factory = (apis) => {
  // Extension Length
  count();

  // Extension APIs
  Object.entries(apis).forEach(([name, module]) => make(module, name));

  // Export APIs
  return apis;
};
