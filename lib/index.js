/**
 * @fileoverview A dummy plugin for testing
 * @author eslint-plugin-my-test
 */
 "use strict";

 module.exports = {
     rules: {
 
     },
     configs : {
         base: {
             parserOptions: {
                 ecmaVersion: 2017,
                 sourceType: 'module',
               },
               env: {
                 browser: true,
               },
               plugins: ['ember'],
               extends: ['eslint:recommended', 'plugin:ember/recommended'],
               rules: {
                 'no-unused-vars': 0
               },
               overrides: [
                 // node files
                 {
                   files: [
                     '.template-lintrc.js',
                     'ember-cli-build.js',
                     'index.js',
                     'testem.js',
                     'blueprints/*/index.js',
                     'config/**/*.js',
                     'tests/dummy/config/**/*.js',
                   ],
                   excludedFiles: [
                     'addon/**',
                     'addon-test-support/**',
                     'app/**',
                     'tests/dummy/app/**',
                   ],
                   parserOptions: {
                     sourceType: 'script',
                     ecmaVersion: 2015,
                   },
                   env: {
                     browser: false,
                     node: true,
                   },
                   plugins: ['node'],
                   rules: Object.assign(
                     {},
                     require('eslint-plugin-node').configs.recommended.rules,
                     {
                       // add your custom rules and overrides for node files here
                     },
                   ),
                 },
               ],
         }         
     }
 }