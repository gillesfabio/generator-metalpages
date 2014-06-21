'use strict';

var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  directories: function() {
    this.directory('src', 'src');
    this.directory('static', 'static');
  },
  templates: function() {
    this.template('_bower.json', 'bower.json');
    this.template('_package.json', 'package.json');
    this.template('_README.md', 'README.md');
    this.mkdir('templates');
    this.template('templates/_layout.html', 'templates/layout.html');
    this.template('templates/_index.html', 'templates/index.html');
  },
  files: function() {
    this.copy('build.js', 'build.js');
    this.copy('editorconfig', '.editorconfig');
    this.copy('gitignore', '.gitignore');
    this.copy('gulpfile.js', 'gulpfile.js');
    this.copy('Makefile', 'Makefile');
  }
});
