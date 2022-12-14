class StaffServiceWrapper {
    init() {
        const StaffService = require('@tryghost/staff-service');

        const config = require('../../../shared/config');
        const logging = require('@tryghost/logging');
        const models = require('../../models');
        const {GhostMailer} = require('../mail');
        const mailer = new GhostMailer();
        const settingsCache = require('../../../shared/settings-cache');
        const urlService = require('../url');
        const urlUtils = require('../../../shared/url-utils');

        this.api = new StaffService({
            config,
            logging,
            models,
            mailer,
            settingsCache,
            urlService,
            urlUtils
        });
    }
}

module.exports = new StaffServiceWrapper();
