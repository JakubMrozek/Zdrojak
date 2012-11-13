var AppError = require(process.cwd() + '/lib/error').AppError;

module.exports = function() {
  return function(err, req, res, next){
    
    /**
     * Chyby z aplikace.
     */
    if (err instanceof AppError) {
      return res.send(err.status, {
        type: err.type,
        message: err.message
      });
    }    
        
    /**
     * Chyby reportovane pouzivanymi moduly.
     */
    if (err instanceof Error) {
      if (err.name && err.name === 'ValidationError') {
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
