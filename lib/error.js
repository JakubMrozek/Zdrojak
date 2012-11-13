var util = require('util');

function AppError() {}

function NotInFields() {
  this.status = 400;  
  this.type = 'NotInFields';
  this.message = 'Pozadavek na pole, ktere neexistuje.';
}
util.inherits(NotInFields, AppError);

function NotAcceptable() {
  this.status = 406;  
  this.type = 'NotAcceptable';
  this.message = 'Pozadavek na format, ktery neni podporovan.';
}
util.inherits(NotAcceptable, AppError);

function UnsupportedMediaType() {
  this.status = 415;  
  this.type = 'UnsupportedMediaType';
  this.message = 'Zaslana data jsou ve formatu, ktery neni podporovan.';
}
util.inherits(UnsupportedMediaType, AppError);

module.exports = {
  AppError: AppError,
  NotInFields: NotInFields,
  NotAcceptable: NotAcceptable,
  UnsupportedMediaType: UnsupportedMediaType
};