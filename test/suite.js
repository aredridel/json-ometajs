"use strict";
var test = require('tap').test;
var glob = require('glob');
var path = require('path');
var json = require('../');
var fs = require('fs');

glob.sync(path.join(__dirname, 'cases/*.json')).forEach(function (n) {
    test(path.relative(path.resolve(__dirname, '..'), n), function (t) {
        try {
            json.parse(fs.readFileSync(n, 'utf-8'));
            if (/fail/.test(n)) {
                t.fail('parse should have failed');
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
