function Inline(template) {
  this.config = {
    restrict: 'E',
    replace: true,
    template: template,
    scope: {
      action: '=',
      model: '=',
      ident: '='
    },
    link: function(scope, element, attrs) {
      var link = new InlineLink(this, scope, element, attrs);
      link.process();
    }.bind(this)
  };
}

Inline.CLASS_WRAPPER = 'inline-wrapper';
Inline.CLASS_PLAIN = 'inline-plain';
Inline.CLASS_EDIT = 'inline-edit';

Inline.prototype.addConfigScopeOption = function(name, value) {
  this.config.scope[name] = value;
};

Inline.prototype.removeConfigScopeOption = function(name) {
  delete this.config.scope[name];
};

Inline.prototype.getConfig = function() {
  return this.config;
};







function InlineLink(inline, scope, element, attrs) {
  this.inline = inline;
  this.scope = scope;
  this.attrs = attrs;
  this.plainElements = this.getPlainElements(element[0]);
  this.editElements = this.getEditElements(element[0]);
  this.content = '';
  this.updated = false;
};

InlineLink.prototype.getPlainElements = function(element) {
  return element.querySelectorAll('.' + Inline.CLASS_PLAIN);
};

InlineLink.prototype.getEditElements = function(element) {
  return element.querySelectorAll('.' + Inline.CLASS_EDIT);
};

InlineLink.prototype.setPlainElementsActivedEvent = function() {
  for (var i = 0; i < this.plainElements.length; ++i) {
    this.plainElements[i].addEventListener('click', this.setPlainElementActivedEvent.bind(this));  
  }
};

InlineLink.prototype.initContent = function() {
  for (var i = 0; i < this.plainElements.length; ++i) {
    this.content += this.plainElements[i].innerText;
  }
};

InlineLink.prototype.showEditElements = function() {
  this.scope.$apply('mode=true');
};

InlineLink.prototype.focusFirstditElement = function() {
  this.editElements[0].focus();
};

InlineLink.prototype.setPlainElementActivedEvent = function(e) {
  this.initContent();
  this.showEditElements();
  this.focusFirstditElement();
  this.updated = false;
};

InlineLink.prototype.process = function() {
  this.setPlainElementsActivedEvent();
};








/*

Inline.prototype.link = function(scope, element, attrbs) {
  var children = element.children();
  var span  = angular.element(children[0]);
  var input = angular.element(children[1]);

  //puvodni obsah
  var content;
  var updated;


  function send(e) {
    var newContent = element.text().trim();
    if (newContent !== '') {
      scope.$apply('mode=false');
    }
    if (newContent !== content && !updated) {
      scope.action(e, scope.ident);
      updated = true;
    }
  }

  //ztrata focusu, ulozit zmenu
  input.bind('blur', function(e){
    send(e);
  });

  //uzivatel kliknul na enter, ulozit zmenu
  input.bind('keypress', function(e){
    if (e.charCode === KEY_CODE_ENTER) send(e);
  });

  //po kliknuti na text zobrazit input pro editaci
  span.bind('click', function() {
    content = element.text().trim();
    scope.$apply('mode=true');
    input[0].focus();
    updated = false;
  });
}

*/




angular.module('zdrojak.directive').directive('inlineTemp', function(){
  var template = 
    '<div class="inline-wrapper">' +
      '<span class="inline-plain" ng-hide="mode">{{model}}</span>' +
      '<input class="inline-edit" type="text" ng-show="mode" ng-model="model">' +
    '</div>';
  var inline = new Inline(template);
  return inline.getConfig();
});












/*

function inlineFactory(template) {

  var KEY_CODE_ENTER = 13;

  var config = {
    restrict: 'E',
    replace: true,
    scope: {
      action: '=',
      model: '=',
      type: '@',
      min: '@',
      ident: '=',
      options: '='
    },
    template: template,
    link: function(scope, element, attrbs) {
      var children = element.children();
      var span  = angular.element(children[0]);
      var input = angular.element(children[1]);

      //puvodni obsah
      var content;
      var updated;

      scope.command = function(command, text) {
        document.execCommand (command, false, text);
      };

      function send(e) {
        var newContent = element.text().trim();
        if (newContent !== '') {
          scope.$apply('mode=false');
        }
        if (newContent !== content && !updated) {
          scope.action(e, scope.ident);
          updated = true;
        }
      }

      //ztrata focusu, ulozit zmenu
      input.bind('blur', function(e){
        send(e);
      });

      //uzivatel kliknul na enter, ulozit zmenu
      input.bind('keypress', function(e){
        if (e.charCode === KEY_CODE_ENTER) send(e);
      });

      //po kliknuti na text zobrazit input pro editaci
      span.bind('click', function() {
        content = element.text().trim();
        scope.$apply('mode=true');
        input[0].focus();
        updated = false;
      });
    }
  }

  return function(){
    return config;
  }
}



angular.module('zdrojak.directive').directive('inline', inlineFactory(
  '<span>' +
  '<span ng-hide="mode">{{model}}</span>' +
  '<input class="input-small" type="{{type}}" min="{{min}}" ng-show="mode" ng-model="model" required>' +
  '</span>'
));



angular.module('zdrojak.directive').directive('inlineSelect', inlineFactory(
  '<span>' +
  '<span ng-hide="mode">{{options[model]}}</span>' +
  '<select ng-model="model" ng-show="mode" ng-options="k as v for (k,v) in options" required></select>' +
  '</span>'
));



angular.module('zdrojak.directive').directive('inlineTextarea', inlineFactory(
  '<span>' +
  '<span ng-hide="mode">{{model}}</span>' +
  '<textarea ng-show="mode" ng-model="model" required></textarea>' +
  '</span>'
));



angular.module('zdrojak.directive').directive('inlineWysiwyg', inlineFactory(
  '<span>' +
  '<span ng-hide="mode" ng-bind-html-unsafe="model"></span>' +
  '<div ng-show="mode">' + 
    '<p>' + 
      '<button ng-click="command(\'bold\')" style="font-weight:bold">B</button>' +
      '<button ng-click="command(\'italic\')" style="font-style: italic">I</button>' +
    '</p>' +
    '<div contenteditable="true" ng-bind-html-unsafe="model"></div>' + 
  '</div>' +
  '</span>'
));

*/