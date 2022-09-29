// pages/index/index
import {
  get,
  post
} from '../../utils/http'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    oneindex:null,
    oneshow: false, //第一层弹出层变量
    twoshow: false, //第二层弹出层变量
    threeshow: false, //第三层弹出层变量
    tabdata: [], //tab数据
    bannerdata: [], //banner数据
    publicdata: [], //近期公开课
    coursesdata: [], //推荐好课
    examdata:[],//选课考试分类
  },
  // 点击tab栏
  tabclick() {

  },
  // 打开第一层弹出层
  onetoClose() {
    this.setData({
      oneshow: true
    })
  },
   // 打开第二层弹出层
   twotoClose(index) {
    this.setData({
      // oneindex:index,
      twoshow: true,
      oneshow: false
    })
  },
   // 打开第三层弹出层
   threetoClose() {
    this.setData({
      threeshow: true,
      twoshow: false
    })
  },
  // 关闭弹出层
  onClose() {
    this.setData({
      oneshow: false, //第一层弹出层变量
      twoshow: false, //第二层弹出层变量
      threeshow: false, //第三层弹出层变量
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 选课考试分类
    get('/app/home/getFirstClassify').then(res => {
      console.log(res);
      if (res.code == 200) {
        this.setData({
          examdata: res.data
        })
      }
    })
    // 获取tab数据
    get('/app/home/getSecondClassify/1?classify_id=1').then(res => {
      // console.log(res);
      if (res.code == 200) {
        this.setData({
          tabdata: res.data
        })
      }
    })
    // 获取banner数据
    get('/app/home/banner/1/4').then(res => {
      // console.log(res);
      if (res.code == 200) {
        this.setData({
          bannerdata: res.data
        })
      }
    })
    // 获取近期公开课数据
    get('/app/home/marketingCourse/1').then(res => {
      // console.log(res);
      if (res.code == 200) {
        this.setData({
          publicdata: res.data
        })
      }
    })
    // 获取推荐好课数据
    get('/app/home/recommendCourse/1').then(res => {
      console.log(res);
      if (res.code == 200) {
        this.setData({
          coursesdata: res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})