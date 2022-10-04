// 枚举
enum CODE {
	SUCCESS = 200
}


// 轮播图
interface SwiperData {
	image_src: string,
	open_type: string,
	goods_id: number,
	navigator_url: string
}


// 导航栏
type NavMessage = Array<{
	name: string,
	image_src: string,
	open_type: string,
	navigator_url: string
}>

interface NavData {
	message: NavMessage,
	meta: {
		msg: string,
		status: number
	}
}


// 楼层
type ProductList = Array<{
	name: string,
	image_src: string,
	open_type: string,
	navigator_url: string
}>

type FloorMessage = Array<{
	floor_title: {
		name: string,
		image_src: string
	}
	product_list: ProductList

}>
interface FloorData {
	message: FloorMessage,
	meta: {
		msg: string,
		status: number
	}
}


// 分类
type CateMessage = Array<{
	cat_id: number,
	cat_name: string,
	cat_pid: number,
	cat_level: number,
	cat_deleted: boolean,
	cat_icon: string,
	children: Array<CateMessage>
}>

interface CateData {
	message: CateMessage,
	meta: {
		msg: string,
		status: number
	}
}

export {
	SwiperData,
	NavData,
	FloorData,
	FloorMessage,
	CODE,
	CateData,
	CateMessage
}