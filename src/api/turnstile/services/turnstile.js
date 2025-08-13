'use strict';

/**
 * turnstile service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::turnstile.turnstile');
