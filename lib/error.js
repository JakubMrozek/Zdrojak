
/**
 * Zavislosti modulu.
 */

var util = require('util');


/**
 * Vychozi trida pro vsechny aplikacni chyby.
 */

function AppError(message) {
  Error.call(this, message);
  Error.captureStackTrace(this, this.constructor);
  this.message = message;
  this.name = this.constructor.name;
}
util.inherits(AppError, Error);

/**
 * Abstracke pro všechny chyby, které vracejí chybový kód v HTTP odpovědi
 */
function HttpErrorResponse(message, statusCode) {
  AppError.call(this, message);
  this.status = statusCode || 400;
  console.log('MSG:', message, 'this.message', this.message);
}
util.inherits(HttpErrorResponse, AppError);

/**
 * Chyba vznika, pokud uzivatel pozaduje zaslat pole, ktere neexistuje.
 * 
 * Viz middleware fields.
 */

function NotInFields(message) {
  HttpErrorResponse.call(this,
      message || 'Pozadavek na pole, ktere neexistuje.',
      400);
}
util.inherits(NotInFields, HttpErrorResponse);

/**
 * Chyba vznika, pokud uzivatel zadava pozadavek na HTTP format, 
 * ktery aplikace nepodporuje.
 * 
 * Viz middleware http406.
 */

function NotAcceptable(message) {
  HttpErrorResponse.call(this,
      message || 'Pozadavek na format, ktery neni podporovan.',
      406);
}
util.inherits(NotAcceptable, HttpErrorResponse);

/**
 * Chyba vznika, pokud uzivatel zasila data v neznamem formatu.
 * 
 * Viz middleware http415.
 */

function UnsupportedMediaType(message) {
  HttpErrorResponse.call(this,
      message || 'Zaslana data jsou ve formatu, ktery neni podporovan.',
      415);
}
util.inherits(UnsupportedMediaType, HttpErrorResponse);


module.exports = {
  AppError: AppError,
  HttpErrorResponse: HttpErrorResponse,
  NotInFields: NotInFields,
  NotAcceptable: NotAcceptable,
  UnsupportedMediaType: UnsupportedMediaType
};
