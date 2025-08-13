'use strict';

/**
 * turnstile router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::turnstile.turnstile');
