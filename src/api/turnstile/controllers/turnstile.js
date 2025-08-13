'use strict';

/**
 * turnstile controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::turnstile.turnstile');
