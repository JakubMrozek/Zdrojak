
/**
 * Zavislosti modulu.
 */

var util = require('util');


/**
 * Vychozi trida pro vsechny aplikacni chyby.
 */

function AppError(message) {
  Error.call(this, message);
  Error.captureStackTrace(this, arguments.callee);
}
util.inherits(AppError, Error);

/**
 * Chyba vznika, pokud uzivatel pozaduje zaslat pole, ktere neexistuje.
 * 
 * Viz middleware fields.
 */

function NotInFields() {
  this.name = 'NotInFields';
  this.status = 400;
  this.message = 'Pozadavek na pole, ktere neexistuje.';
  AppError.call(this);
}
util.inherits(NotInFields, AppError);

/**
 * Chyba vznika, pokud uzivatel zadava pozadavek na HTTP format, 
 * ktery aplikace nepodporuje.
 * 
 * Viz middleware http406.
 */

function NotAcceptable() {
  this.name = 'NotAcceptable';
  this.status = 406;
  this.message = 'Pozadavek na format, ktery neni podporovan.';
  AppError.call(this);
}
util.inherits(NotAcceptable, AppError);

/**
 * Chyba vznika, pokud uzivatel zasila data v neznamem formatu.
 * 
 * Viz middleware http415.
 */

function UnsupportedMediaType() {
  this.name = 'UnsupportedMediaType';
  this.status = 415;
  this.message = 'Zaslana data jsou ve formatu, ktery neni podporovan.';
  AppError.call(this);
}
util.inherits(UnsupportedMediaType, AppError);


module.exports = {
  AppError: AppError,
  NotInFields: NotInFields,
  NotAcceptable: NotAcceptable,
  UnsupportedMediaType: UnsupportedMediaType
};