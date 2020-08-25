"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.geocodeByPlaceId = exports.getLatLng = exports.geocodeByAddress = void 0;

var geocodeByAddress = function geocodeByAddress(address) {
  var geocoder = new window.google.maps.Geocoder();
  var OK = window.google.maps.GeocoderStatus.OK;
  return new Promise(function (resolve, reject) {
    geocoder.geocode({
      address: address
    }, function (results, status) {
      if (status !== OK) {
        reject(status);
      }

      resolve(results);
    });
  });
};

exports.geocodeByAddress = geocodeByAddress;

var getLatLng = function getLatLng(result) {
  return new Promise(function (resolve, reject) {
    try {
      var latLng = {
        lat: result.geometry.location.lat(),
        lng: result.geometry.location.lng()
      };
      resolve(latLng);
    } catch (e) {
      reject(e);
    }
  });
};

exports.getLatLng = getLatLng;

var geocodeByPlaceId = function geocodeByPlaceId(placeId) {
  var geocoder = new window.google.maps.Geocoder();
  var OK = window.google.maps.GeocoderStatus.OK;
  return new Promise(function (resolve, reject) {
    geocoder.geocode({
      placeId: placeId
    }, function (results, status) {
      if (status !== OK) {
        reject(status);
      }

      resolve(results);
    });
  });
};

exports.geocodeByPlaceId = geocodeByPlaceId;