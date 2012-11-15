
/**
 * Zavislosti modulu.
 */

var HttpErrorResponse = require('../lib/error').HttpErrorResponse;

/**
 * Middleware pro zpracovani chyb.
 * 
 * @return {Function}
 */

module.exports = function() {
  return function(err, req, res, next){
    
    /**
     * Chyby z aplikace.
     */
    if (err instanceof HttpErrorResponse) {
      return res.send(err.status, {
        type: err.name,
        message: err.message
      });
    }    
        
    /**
     * Chyby reportovane pouzivanymi moduly.
     */
    if (err instanceof Error) {
      if (err.name === 'ValidationError') {
        return res.send(400, {
          type: 'ValidationError',
          message: err.message,
          errors: err.errors
        });   
      }
    }
        
    next(err);
  };
};
