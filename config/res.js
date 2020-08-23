'use strict';

// 2** error code
exports.ok = function(values, res) {
  let data = {
      'status': 200,
      'message' : 'Success',
      'data': values,
  };
  res.json(data);
  res.end();
};

exports.authsuccess = function(values, res, token) {
  let data = {
      'status': 200,
      'message' : 'Success',
      'data': values,
      'token' : token
  };
  res.json(data);
  res.end();
};

// 4** error code
exports.failed = function(values, res) {
  let data = {
      'status': 400,
      'message' : 'Request Failed',
      'data': values,
  };
  res.json(data);
  res.end();
};

exports.notfound = function(values, res) {
  let data = {
      'status': 404,
      'message' : 'Data Not Found',
      'data': values,
  };
  res.json(data);
  res.end();
};

// 5** error code

exports.failed = function(values, res) {
  let data = {
      'status': 500,
      'message' : 'Internal Server Error',
      'values': values,
  };
  res.json(data);
  res.end();
};