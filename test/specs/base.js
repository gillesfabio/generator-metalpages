/*jshint expr: true*/
/*global describe, beforeEach, it*/
'use strict';

var generator = require('yeoman-generator');
var helpers   = generator.test;
var assert    = generator.assert;
var config    = require('../config');

describe('base', function() {

  beforeEach(function(done) {
    helpers.testDirectory(config.testDirectory, function(err) {
      if (err) return done(err);
      this.app = helpers.createGenerator('metalpages', [config.appPath]);
      this.app.options['skip-install'] = true;
      done();
    }.bind(this));
  });

  it('should properly setup project', function(done) {
    helpers.mockPrompt(this.app, this.prompts);
    var expected = [
      'src/metadata.json',
      'src/index.md',
      'static/css/index.css',
      'static/images',
      'templates/layout.html',
      'templates/index.html',
      '.editorconfig',
      '.gitignore',
      'bower.json',
      'package.json',
      'build.js',
      'gulpfile.js',
      'Makefile',
      'README.md'
    ];
    this.app.run({}, function() {
      assert.file(expected);
      done();
    });
  });

  it('should properly setup app name in all templates', function(done) {
    helpers.mockPrompt(this.app, this.prompts);
    var files = [
      'bower.json',
      'package.json',
      'README.md',
      'templates/layout.html',
      'templates/index.html'
    ];
    this.app.run({}, function() {
      files.forEach(function(file) {
        assert.fileContent(file, /tmp/);
      });
      done();
    });
  });

});
