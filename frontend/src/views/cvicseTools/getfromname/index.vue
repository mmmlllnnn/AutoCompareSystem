<template>
	<div>

		<n-space>
				<n-gradient-text style="margin-top: 5px;" :size="15">共有数据：{{ flash.number }}条</n-gradient-text>
				<n-button  type="primary" @click="getfromname">点击获取数据</n-button>
		</n-space>


		<n-data-table :columns="columns" :data="flash.data" :pagination="pagination" :single-line="false" striped />


	</div>
</template>

<script >
import { ref, defineComponent } from "vue";
import axios from 'axios';
import { useMessage } from 'naive-ui'

//数据
var flash = ref({})
//列名
const columns = [
	{
		title: "分类",
		key: "category"
	},
	{
		title: "表单名称",
		key: "title"
	},
	{
		title: "模板编号",
		key: "uniqueCode"
	},
	{
		title: '查看对应sql',
		key: 'actions'
	}
];


export default defineComponent({
	data() {
		return {
			columns,
			flash,
			pagination: { pageSize: 50 }
		};
	},
	setup() {
		//获取表单信息
		const message = useMessage();//弹出框
		const getfromname = () => {//发送请求获取数据
			message.loading('正在查询数据库数据，请稍后', { duration: 1000 });
			axios.get('http://localhost:5000/getfromname').then(
				success => {
					message.success('获取数据成功', { duration: 1000 });
					console.log('请求成功！');
					flash.value = success.data;
					// console.log(flash.value);
				},
				error => {
					console.log('请求失败！');
					console.log(error.message);
				}
			);
		};
		return { getfromname };
	}

});
</script>

