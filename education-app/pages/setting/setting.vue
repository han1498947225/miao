<template>
	<view>
		<view class="uni-list">
			<view>允许非WIFI网络播放</view>
			<switch />
		</view>
		<view class="uni-list">
			<view>允许非WIFI网络缓存</view>
			<switch />
		</view>
		<view class="uni-list">
			<view>视频自动连续播放</view>
			<switch />
		</view>
		<view class="uni-list">
			<view>清除应用缓存</view>
			<view style="color:#ccc;margin-right:12rpx" @click="toclear">{{num}}KB</view>
		</view>
	</view>
</template>

<script>
	import { reactive,toRefs } from 'vue'
	export default {
		setup() {
			const data=reactive({
				num:6
			})
			const toclear=()=>{
				uni.showModal({
					title:"您确定清除应用缓存吗?",
					content:"(该操作不会删除缓存课程)",
					success: function(res) {
						if (res.confirm) {
							data.num=0
							console.log('用户点击确定');
							localStorage.clear()
							uni.showToast({
								icon:'none',
								title:"清除成功"
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				})
			}
			return {
				...toRefs(data),
				toclear
			}
		}
	}
</script>

<style lang="scss">
.uni-list{
	height: 120rpx;
	line-height: 120rpx;
	padding: 0 40rpx;
	display: flex;
	justify-content: space-between;
}
</style>
