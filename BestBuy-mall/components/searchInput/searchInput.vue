<template>
	<view class="header">
		<view class="search">
			搜索
		</view>
	</view>
</template>

<script>
	export default {
		name: "searchInput",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	
	.header {
		padding: 10rpx;
		background-color: #d75255;
	
		.search {
			width: 100%;
			height: 70rpx;
			line-height: 70rpx;
			text-align: center;
			background-color: #fff;
			border-radius: 20rpx;
			color: #333;
			font-size: 26rpx;
		}
	}
</style>
