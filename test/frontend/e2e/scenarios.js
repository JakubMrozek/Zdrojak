'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

//rekne aplikaci, aby pracovala s mocky
var scenario = true;

describe('zdrojak', function() {
    
  beforeEach(function() {
    browser().navigateTo('/');
  });
    
  describe('seznam vsech stranek', function() {

    beforeEach(function() {
      browser().navigateTo('/pages');
    });

    it('zobrazi seznam vsech stranek', function() {
      var repeater = using('.body').repeater('ul li');
      expect(repeater.count()).toBe(3);
    });

  });
});