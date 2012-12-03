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
  
  describe('/pages/:page', function() {
      
    beforeEach(function() {
      browser().navigateTo('/pages/test');
    });

    it('zobrazi detail stranky', function() {
      expect(element('h1').text()).toBe('Kontakt');
    });
    
    it('edituje nazev stranky', function() {
      var h1Elm = element('h1');
      var spanElm = element('h1 span');
      var inputElm = element('h1 input');
        
      expect(spanElm.css('display')).not().toBe('none');
      expect(inputElm.css('display')).toBe('none');
      
      element('h1 span').click();
      
      expect(spanElm.css('display')).toBe('none');
      expect(inputElm.css('display')).not().toBe('none');
      
      input('value').enter('test');
      
      expect(h1Elm.text()).toBe('test');
      
    }); 
    
  });  
  
  
  
});