<template>
	<view>
		<!-- 表单 -->
		<form @submit="formSubmit">
			<!-- 单选框 -->
			<view class="uni-form-item uni-column" style="margin:50rpx 90rpx;">
				<radio-group name="radio" class="radio">
					<label>
						<radio value="内容意见" checked="true" /><text style="margin-right: 30rpx;">内容意见</text>
					</label>
					<label>
						<radio value="产品建议" /><text style="margin-right: 30rpx;">产品建议</text>
					</label>
					<label>
						<radio value="其他" /><text style="margin-right: 30rpx;">其他</text>
					</label>
				</radio-group>
			</view>
			<!-- 文本域 -->
			<view class="uni-form-item uni-column">
				<view class="uni-textarea input">
					<textarea placeholder-style="color:#aaa" placeholder="请填写具体内容帮助我们了解您的意见和建议" name="fannum" />
				</view>
			</view>
			<!-- QQ输入框 -->
			<view class="uni-form-item uni-column input">
				<input class="uni-input" name="qqnum" placeholder="填写您的QQ" />
			</view>
			<!-- 微信输入框 -->
			<view class="uni-form-item uni-column input">
				<input class="uni-input" name="weixinnum" placeholder="填写您的微信" />
			</view>
			<!-- 提交按钮 -->
			<view class="uni-btn-v" style="margin: 0 30rpx;">
				<button form-type="submit" style="background-color: #007aff;color: #fff;">提交</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		setup() {
			// 提交
			const formSubmit = (e) => {
				var formdata = e.detail.value
				// 判空
				if (formdata.fannum == '' || formdata.qqnum == '' || formdata.weixinnum == '' || formdata.radio ==
					'') {
					uni.showToast({
						title: '输入不能为空',
						duration: 2000,
						icon: "none"
					})
				} else {
					var fannum = /^[\u4E00-\u9FA5]{10,}$/
					var qqnum = /^[1-9][0-9][1-9]{1,10}$/
					var weixinnum = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/
					// 内容正则
					if (!fannum.test(formdata.fannum)) {
						uni.showToast({
							title: '内容必须在10个字符',
							duration: 2000,
							icon: "none"
						})
						// QQ号正则
					} else if (!qqnum.test(formdata.qqnum)) {
						uni.showToast({
							title: 'qq号不规范',
							duration: 2000,
							icon: "none"
						})
						// 微信正则
					} else if (!weixinnum.test(formdata.weixinnum)) {
						uni.showToast({
							title: '微信号不规范',
							duration: 2000,
							icon: "none"
						})
					} else {
						// 反馈成功
						uni.showModal({
							showCancel: false,
							content: '您的意见反馈已经成功',
							success: function(res) {
								if (res.confirm) {
									console.log('用户点击确定');
								} else if (res.cancel) {
									console.log('用户点击取消');
								}
							}
						});
					}

				}
			}
			return {
				formSubmit
			}
		}
	}
</script>

<style lang="scss">
	.input {
		margin: 0 30rpx 30rpx 30rpx;
		border: 1px solid #eee;
		padding: 20rpx;
	}

	.uni-form-item .title {
		padding: 20rpx 0;
	}

	.uni-padding-wrap {
		margin: 100rpx 0;
		display: flex;
		justify-content: center;
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
			right: 300rpx;
		}
	}
</style>
