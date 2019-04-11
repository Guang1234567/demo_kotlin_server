(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'demo_kotlin_server'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'demo_kotlin_server'.");
    }
    root.demo_kotlin_server = factory(typeof demo_kotlin_server === 'undefined' ? {} : demo_kotlin_server, kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  function hello() {
    return 'Hello from JS';
  }
  function Sample() {
  }
  Sample.prototype.checkMe = function () {
    return 12;
  };
  Sample.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Sample',
    interfaces: []
  };
  function Platform() {
    Platform_instance = this;
    this.name = 'JS';
  }
  Platform.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Platform',
    interfaces: []
  };
  var Platform_instance = null;
  function Platform_getInstance() {
    if (Platform_instance === null) {
      new Platform();
    }
    return Platform_instance;
  }
  function helloWorld(salutation) {
    var tmp$;
    var message = salutation + ' from Kotlin.JS ' + hello() + ', check me value: ' + (new Sample()).checkMe();
    (tmp$ = document.getElementById('js-response')) != null ? (tmp$.textContent = message) : null;
  }
  var package$wechat = _.wechat || (_.wechat = {});
  var package$open = package$wechat.open || (package$wechat.open = {});
  package$open.hello = hello;
  package$open.Sample = Sample;
  Object.defineProperty(package$open, 'Platform', {
    get: Platform_getInstance
  });
  package$open.helloWorld = helloWorld;
  Kotlin.defineModule('demo_kotlin_server', _);
  return _;
}));

//# sourceMappingURL=demo_kotlin_server.js.map
