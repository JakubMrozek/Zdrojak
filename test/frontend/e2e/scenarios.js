'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

//rekne aplikaci, aby pracovala s mocky
var scenario = true;

describe('zdrojak', function() {
    
  describe('/pages', function() {

    beforeEach(function() {
      browser().navigateTo('/pages');
    });

    it('zobrazi seznam vsech stranek', function() {
      var repeater = using('#pages-list').repeater('ul li');
      expect(repeater.count()).toBe(3);
    });

  });
});