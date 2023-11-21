'use strict';

// Use APIs
import * as APIs from './apis';

// Json
export const json = {};

// Noop
export const noop = () => {};

// Sync
export const sync = value => value;

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
 * Functional Empty - Scope is Empty
 * ======== ======== ========
 * @param scope { json }
 * ======== ======== ========
 */
export const empty = scope => [null, undefined].includes(scope);

/**
 * Functional Check - Constructor of Scope
 * ======== ======== ========
 * @param scope { json }
 * ======== ======== ========
 */
export const check = (target, compare) => {
  // Is Empty
  if (empty(target)) {
    return false;
  }

  // Comparing Constructor
  return target.constructor === compare;
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
      // Is Empty
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
 * Functional Alter - Alter for API
 * ======== ======== ========
 * @param apis { json }
 * @param alia { string }
 * @param origin { string }
 * ======== ======== ========
 */
export const alter = (apis, alia, origin) => {
  // Check Alia
  if (empty(alia)) {
    return origin;
  }

  // Rename
  apis[alia] = apis[origin];

  // Clean
  delete apis[origin];

  // Exporting
  return alia;
};

/**
 * Functional Define
 * ======== ======== ========
 * @param alias { json }
 * @param apis { modules }
 * ======== ======== ========
 */
export const define = (alias = {}, apis = { ...APIs }) => {
  // Is Defined
  if (define.apis) {
    return define.apis;
  }

  // Best Performance
  for (const name in apis) {
    // Make
    make(apis[name], alter(apis, alias[name], name));
  }

  // Exposure APIs
  return (define.apis = apis);
};
