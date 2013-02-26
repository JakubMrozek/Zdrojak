function Upload(xhr, fd) {
  this._xhr = xhr;
  this._fd = fd;
  this._files = [];
}

Upload.prototype.getFiles = function() {
  return this._files;
};

Upload.prototype.setFiles = function(files) {
  this._files = [];
  for (var i in files) {
    this.addFile(files[i]);
  }
};

Upload.prototype.addFile = function(file) {
  this._fd.append('file', file);
  this._files.push(file);
};

Upload.prototype.upload = function(method, url, completeFn, errorFn, cancelFn, progressFn) {
  if (progressFn) this._xhr.upload.addEventListener('progress', progressFn, false);
  if (completeFn) this._xhr.addEventListener('load', completeFn, false);
  if (errorFn) this._xhr.addEventListener('error', errorFn, false);
  if (cancelFn) this._xhr.addEventListener('abort', cancelFn, false);
  this._xhr.open(method, url);
  this._xhr.send(this._fd);
};