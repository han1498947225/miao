<template>
	<view>
		<div class="logo-box">
			<img src="/static/images/logo-black.png" alt="">
		</div>
		<p class="version">Version 1.0.0</p>

		<div class="text">
			<p>梦学谷是专注于在线教育平台，聚合了优秀教师的海量精品课程。在这里，您可以在线观看视频教程；您可以随时随地向名师请教；您可以与大量志同道合的同学进行交流。</p>
			<p>打破地域的限制，让每个立志学习，有梦想的人，都能接受优秀教师的指导和教学；同时希望给优秀的教师一个展示的平台。</p>
			<p>梦学谷——陪你学习，伴你梦想！</p>
		</div>
		<div class="footer">
			Copyright © 2022 mengxuegu.com All rights reserved
		</div>
	</view>
</template>

<script>
	export default {
		setup() {
			// 返回
			const backabout=()=>{
				uni.navigateBack({
					delta:1
				})
			}
			return {
				backabout
			}
		}
	}
</script>

<style lang="scss">
	.footer {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 10px;
		font-size: 10px;
		color: #959da5;
		text-align: center;
	}

	.text {
		font-size: 30rpx;
		text-indent: 2em;
		p{
			margin: 20rpx;
			color: #333;
		}
	}

	.logo-box {
		width: 300rpx;
		height: 100rpx;
		padding: 100rpx 0 20rpx 0;
		margin: 0 auto;

		img {
			width: 100%;
			height: 100%;
		}
	}

	.version {
		font-size: 15px;
		color: #345dc2;
		font-weight: 500;
		text-align: center;
		margin-bottom: 60rpx;
	}

	.top {
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		font-size: 32rpx;
		font-weight: 600;

		img {
			float: left;
			width: 50rpx;
			margin: 20rpx 0 0 20rpx;
		}

		span {
			position: absolute;
			top: 14rpx;
			right: 290rpx;
		}
	}
</style>
