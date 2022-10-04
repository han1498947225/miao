"use strict";
var uilts_request = require("../uilts/request.js");
const getSwiperData = () => {
  return uilts_request.request("/home/swiperdata").then((res) => res, (err) => err);
};
const getNavData = () => {
  return uilts_request.request("/home/catitems").then((res) => res, (err) => err);
};
const getFloor = () => {
  return uilts_request.request("/home/floordata").then((res) => res, (err) => err);
};
const getCate = () => {
  return uilts_request.request("/categories").then((res) => res, (err) => err);
};
exports.getCate = getCate;
exports.getFloor = getFloor;
exports.getNavData = getNavData;
exports.getSwiperData = getSwiperData;
