<template>
	<view>
		<!-- 搜索plus -->
		<myInput></myInput>
		<!-- 热门搜索 -->
		<p style="margin-top: 20rpx;">热门搜索</p>
		<div class="box">
			<div class="item" v-for="item,index in hotlist" :key="index" @click="hotsearch(item)">{{item}}</div>
		</div>
		<p><span>历史搜索</span><span @click="clear">清空</span></p>
		<div class="box">
			<div class="item" v-for="item,index in historylist" :key="index" @click="hotsearch(item)">{{item}}</div>
		</div>
	</view>
</template>

<script>
	import { reactive,toRefs } from 'vue'
	export default {
		setup() {
			const data=reactive({
				hotlist:['java','Python','Vue.js','React','SpringBoot','SpringCloud'],//热门搜索
				historylist:['java'],//历史搜索
			})
			// 点击
			const hotsearch=(obj)=>{
				// 跳转搜索plus
				uni.navigateTo({
					url:`/pages/contentView/contentView?name=${name}`,
				})
				if(data.historylist.find(item=>item==obj)){
					return false
				}
				else{
					data.historylist.push(obj)
				}
			}
			// 清空
			const clear=()=>{
				data.historylist=[]
			}
			return {
				 hotsearch,
				clear,
				...toRefs(data)
			}
		}
	}
</script>

<style lang="scss">
p{
	margin: 20rpx 10rpx;
	font-weight: 500;
	display: flex;
	justify-content: space-between;
}
.box{
	width: 100%;
	padding: 0 20rpx;
	height: 250rpx;
	.item{
			float: left;
			border: 1rpx solid #ccc;
			margin: 20rpx 5rpx;
			height: 50rpx;
			line-height: 50rpx;
			padding: 5rpx 20rpx;
			text-align: center;
			border-radius: 25rpx;
			font-size: 16rpx;			
			color: #aaa;
	}
}
</style>
