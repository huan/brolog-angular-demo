/**
 * WEB ANGULAR VERSION
 * (based on systemjs.config.js in angular.io)
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  var angularVersion

  if(window.AngularVersion === 'latest'){
    angularVersion = ''; //picks up latest
  }
  else {
    angularVersion = '@' + window.AngularVersion;
  }

  System.config({
    // DEMO ONLY! REAL CODE SHOULD NOT TRANSPILE IN THE BROWSER
    transpiler: 'typescript',
    typescriptOptions: {
      // Copy of compiler options in standard tsconfig.json
      "target": "es5",
      "module": "system",
      "moduleResolution": "node",
      "sourceMap": true,
      "emitDecoratorMetadata": true,
      "experimentalDecorators": true,
      "lib": ["es2015", "dom"],
      "strict": true,
      "suppressImplicitAnyIndexErrors": true
    },
    paths: {
      // paths serve as alias
      'npm:': 'https://unpkg.com/'
    },
    // map tells the System loader where to look for things
    map: {
      brolog: 'node_modules/brolog/bundles/brolog.umd.js',

      // angular bundles
      '@angular/core': 'npm:@angular/core'+ angularVersion + '/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common' + angularVersion + '/bundles/common.umd.js',
      '@angular/common/http': 'npm:@angular/common' + angularVersion + '/bundles/common-http.umd.js',
      '@angular/compiler': 'npm:@angular/compiler' + angularVersion  + '/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser' + angularVersion + '/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic' + angularVersion + '/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http' + angularVersion + '/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router' + angularVersion +'/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms' + angularVersion + '/bundles/forms.umd.js',
      '@angular/animations': 'npm:@angular/animations' + angularVersion + '/bundles/animations.umd.js',
      '@angular/platform-browser/animations': 'npm:@angular/platform-browser' + angularVersion + '/bundles/platform-browser-animations.umd.js',
      '@angular/animations/browser': 'npm:@angular/animations' + angularVersion + '/bundles/animations-browser.umd.js',
      
      '@angular/core/testing': 'npm:@angular/core' + angularVersion + '/bundles/core-testing.umd.js',
      '@angular/common/testing': 'npm:@angular/common' + angularVersion + '/bundles/common-testing.umd.js',
      '@angular/common/http/testing': 'npm:@angular/common' + angularVersion + '/bundles/common-http-testing.umd.js',
      '@angular/compiler/testing': 'npm:@angular/compiler' + angularVersion + '/bundles/compiler-testing.umd.js',
      '@angular/platform-browser/testing': 'npm:@angular/platform-browser' + angularVersion + '/bundles/platform-browser-testing.umd.js',
      '@angular/platform-browser-dynamic/testing': 'npm:@angular/platform-browser-dynamic' + angularVersion + '/bundles/platform-browser-dynamic-testing.umd.js',
      '@angular/http/testing': 'npm:@angular/http' + angularVersion + '/bundles/http-testing.umd.js',
      '@angular/router/testing': 'npm:@angular/router' + angularVersion + '/bundles/router-testing.umd.js',
      
      // other libraries
      'tslib': 'npm:tslib@1.6.1',
      'rxjs': 'npm:rxjs@5.5.10',
      'typescript': 'npm:typescript@2.2.1/lib/typescript.js',
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      rxjs: {
        defaultExtension: 'js'
      }
    }
  });

})(this);

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
