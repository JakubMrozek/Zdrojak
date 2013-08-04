function Inline(template, Cls) {
  this.config = {
    restrict: 'E',
    replace: true,
    template: template,
    scope: {
      action: '=',
      model: '=',
      ident: '=',
      attrs: '@'
    },
    link: function(scope, element, attrs) {
      var link = new Cls(this, scope, element, attrs);
      link.process();
    }.bind(this)
  };
}

Inline.CLASS_WRAPPER = 'inline-wrapper';
Inline.CLASS_PLAIN = 'inline-plain';
Inline.CLASS_EDIT = 'inline-edit';
Inline.CLASS_EMPTY = 'inline-empty';
Inline.CLASS_FOCUSED = 'inline-focused';

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
  this.element = element[0];
  this.plainElements = this.getPlainElements(element[0]);
  this.editElements = this.getEditElements(element[0]);
  this.content = [];
  this.updated = true;
  this.required = false;
};

InlineLink.KEY_CODE_ENTER = 13;

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

InlineLink.prototype.getContent = function() {
  var content = [];
  for (var i = 0; i < this.plainElements.length; ++i) {
    if (this.plainElements[i].classList.contains(Inline.CLASS_EMPTY)) {
      continue;
    }
    content.push(this.plainElements[i].innerText);
  }
  return content;
};

InlineLink.prototype.showEditElements = function() {
  this.scope.$apply('mode=true');
};

InlineLink.prototype.hideEditElements = function() {
  this.scope.$apply('mode=false');
};

InlineLink.prototype.showLoader = function() {
  this.scope.$apply('loader=true');
};

InlineLink.prototype.hideLoader = function() {
  this.scope.$apply('loader=false');
};

InlineLink.prototype.focusFirstditElement = function() {
  this.editElements[0].focus();
};

InlineLink.prototype.setPlainElementActivedEvent = function(e) {
  this.content = this.getContent();
  this.showEditElements();
  this.focusFirstditElement();
  this.updated = false;
};

InlineLink.prototype.setEditElementsUpdatedEvent = function() {
  this.setEditElementsBlurEvent();
  this.setEditElementsEnterEvent();
};

InlineLink.prototype.setEditElementsFocusEvent = function() {
  for (var i = 0; i < this.editElements.length; ++i) {
    this.editElements[i].addEventListener('focus', function(e){
      e.target.classList.add(Inline.CLASS_FOCUSED);
    }.bind(this));  
  }
};

InlineLink.prototype.setEditElementsBlurEvent = function() {
  for (var i = 0; i < this.editElements.length; ++i) {
    this.editElements[i].addEventListener('blur', function(e){
      e.target.classList.remove(Inline.CLASS_FOCUSED);
      setTimeout(function(){
        this.blurSetEditEvent(e);
      }.bind(this) , 10);
    }.bind(this));  
  }
};

InlineLink.prototype.blurSetEditEvent = function() {
  for (var i = 0; i < this.editElements.length; ++i) {
    if (this.editElements[i].classList.contains(Inline.CLASS_FOCUSED)) {
      return true;
    }
  }
  this.setUpdateEvent();
};

InlineLink.prototype.setEditElementsEnterEvent = function() {
  for (var i = 0; i < this.editElements.length; ++i) {
    this.editElements[i].addEventListener('keypress', function(e){
      if (e.charCode === InlineLink.KEY_CODE_ENTER) {
        this.setUpdateEvent(e);
      }
    }.bind(this));  
  }
};
  
InlineLink.prototype.setUpdateEvent = function(e) {
  var contentNew = this.getContent().toString().trim();
  var contentOld = this.content.toString().trim();

  if (this.updated) {
    return false;
  }

  if (contentNew === '' && this.required) {
    return false;
  }

  if (contentNew === contentOld) {
    return false;
  }

  var success = function() {
    this.updated = true;
    this.hideLoader();
    this.hideEditElements();
  }.bind(this);

  var error = function() {
    this.hideLoader();
  }.bind(this);

  this.showLoader();
  this.scope.action(e, this, success, error);
};

InlineLink.prototype.setAttributes = function() {
  var attrs = this.scope.$eval(this.attrs.attrs) || {};
  for (var i = 0; i < this.editElements.length; ++i) {
    for (var a in attrs) {
      if (a === 'class') {
        this.editElements[i].classList.add(attrs[a]);
      } else {
        this.editElements[i][a] = attrs[a];
      }
    }
  }
  this.required = attrs.required;
};

InlineLink.prototype.process = function() {
  this.setAttributes();
  this.setPlainElementsActivedEvent();
  this.setEditElementsFocusEvent();
  this.setEditElementsUpdatedEvent();
};





angular.module('zdrojak.directive').directive('inlineTemp', function(){
  var template = 
    '<div class="inline-wrapper">' +
      '<span class="inline-plain" ng-hide="mode">{{model}}</span>' +
      '<input class="inline-edit" ng-show="mode" ng-model="model">' +
      '<em class="inline-plain inline-empty" ng-hide="model || mode">(upravit)</em>' +
      '<img src="/img/loader.gif" ng-show="loader">' +
    '</div>';
  var inline = new Inline(template, InlineLink);
  return inline.getConfig();
});












/*





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