import { request } from '../uilts/request.js'
import * as TS from './define.ts'
// 获取轮播图数据
const getSwiperData = () => {
	return request('/home/swiperdata').then((res: TS.SwiperData) => res, err => err)
}
// 获取导航栏数据
const getNavData = () => {
	return request('/home/catitems').then((res: TS.NavData) => res, err => err)
}
// 获取楼层数据
const getFloor = () => {
	return request('/home/floordata').then((res: TS.FloorData) => res, err => err)
}
// 获取分类数据
const getCate = () => {
	return request('/categories').then((res: TS.CateData) => res, err => err)
}
export {
	getSwiperData,
	getNavData,
	getFloor,
	getCate
}