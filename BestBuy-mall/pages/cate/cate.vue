<template>
	<view>
		<!-- 搜索模块 -->
		<search-input></search-input>
		<!-- 分类部分 -->
		<div class="box">
			<div class="left">
				<div v-for="(item, index) in data.getCateList" :key="index">
					{{item.cat_name}}
				</div>
			</div>
			<div class="right">
				<div>
					
				</div>
			</div>
		</div>
	</view>
</template>

<script lang="ts" setup>
	import {getCate} from '@/api/api'
import { reactive } from "vue";
	const data=reactive({
		getCateList:[]
	})
	getCate().then(res=>{
		 console.log(res);
		data.getCateList=res.message
	})
</script>

<style lang="scss">

</style>
