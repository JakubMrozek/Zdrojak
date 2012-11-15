
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
 * Abstrakce pro vsechny chyby, ktere vraceji chybovy kod v HTTP odpovedi.
 */
function HttpResponseError(message, statusCode) {
  AppError.call(this, message);
  this.status = statusCode || 400;
}
util.inherits(HttpResponseError, AppError);

/**
 * Chyba vznika, pokud uzivatel pozaduje zaslat pole, ktere neexistuje.
 * 
 * Viz middleware fields.
 */

function NotInFields(message) {
  message = message || 'Pozadavek na pole, ktere neexistuje.';
  HttpResponseError.call(this, message, 400);
}
util.inherits(NotInFields, HttpResponseError);

/**
 * Chyba vznika, pokud uzivatel zadava pozadavek na HTTP format, 
 * ktery aplikace nepodporuje.
 * 
 * Viz middleware http406.
 */

function NotAcceptable(message) {
  message = message || 'Pozadavek na format, ktery neni podporovan.';
  HttpResponseError.call(this, message, 406);
}
util.inherits(NotAcceptable, HttpResponseError);

/**
 * Chyba vznika, pokud uzivatel zasila data v neznamem formatu.
 * 
 * Viz middleware http415.
 */

function UnsupportedMediaType(message) {
  message = message || 'Zaslana data jsou ve formatu, ktery neni podporovan.';
  HttpResponseError.call(this, message, 415);
}
util.inherits(UnsupportedMediaType, HttpResponseError);


module.exports = {
  AppError: AppError,
  HttpResponseError: HttpResponseError,
  NotInFields: NotInFields,
  NotAcceptable: NotAcceptable,
  UnsupportedMediaType: UnsupportedMediaType
};
