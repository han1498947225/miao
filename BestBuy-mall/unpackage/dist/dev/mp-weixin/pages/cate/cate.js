"use strict";
var common_vendor = require("../../common/vendor.js");
var api_api = require("../../api/api.js");
require("../../uilts/request.js");
if (!Array) {
  const _component_search_input = common_vendor.resolveComponent("search-input");
  _component_search_input();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "cate",
  setup(__props) {
    const data = common_vendor.reactive({
      getCateList: []
    });
    api_api.getCate().then((res) => {
      console.log(res);
      data.getCateList = res.message;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(data.getCateList, (item, index, i0) => {
          return {
            a: common_vendor.t(item.cat_name),
            b: index
          };
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/\u97E9\u751C\u751C/Desktop/\u5B9E\u8BAD/\u4F18\u8D2D\u5546\u573A/BestBuy-mall/pages/cate/cate.vue"]]);
wx.createPage(MiniProgramPage);
