"use strict";
var test = require('tap').test;
var glob = require('glob');
var path = require('path');
var json = require('../');
var fs = require('fs');
var util = require('util');

glob.sync(path.join(__dirname, 'cases/*.json')).forEach(function (n) {
    test(path.relative(path.resolve(__dirname, '..'), n), function (t) {
        try {
            var val = json.parse(fs.readFileSync(n, 'utf-8'));
            if (/fail/.test(n)) {
                t.fail(util.format('parse should have failed, got %j', val));
            } else {
                t.pass();
            }
        } catch (e) {
            if (/fail/.test(n)) {
                t.pass(e);
            } else {
                t.error(e);
            }
        }
        t.end();
    });
});
