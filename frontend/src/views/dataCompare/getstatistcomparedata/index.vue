<template>
	<div>
		<n-card>
			<n-space>
				<div class="horizontal-layout-group">
					<n-select :options="options" @update:value="handleUpdateValue1" style="width: 250px;" />
					<n-select :options="options" @update:value="handleUpdateValue2" style="width: 250px;margin-left:10px;" />
					<n-input type="text" :on-input="getInputValue" placeholder="默认关联主键" autosize
						style="min-width: 20%;margin-left:10px;" clearable />
					<n-button type="primary" style="margin-left: 10px;" @click="getcolumns">点击对比数据</n-button>
				</div>
			</n-space>
		</n-card>
		<n-space>
			<n-gradient-text :size="15">共有数据：{{ flash.number }}条</n-gradient-text>
		</n-space>
		<n-data-table :columns="columns" :data="flash.data" :pagination="pagination" :single-line="false"

			:scroll-x="scrollnum" />
	</div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import axios from 'axios';
import { useMessage } from 'naive-ui'

//模板编号1,模板编号2,关联主键,用于发送请求,默认有值,用户调用handleUpdateValue更新值
let templatecode1 = "contract";
let templatecode2 = "loanflash";
let majorkey = "contractid";

//表格长度，默认2000，后面请求的时候会动态改变为：字段个数*150
let scrollnum = ref(2000)
//表中数据
let flash = ref({})
//列名
let columns:any = ref([]);

//列的索引，因为naive-ui只有行的，没有列的索引属性，所以自己造一个，
//每次cellProps渲染，columnindex都会加一，长度被列名个数整除，说明一行渲染完了,重新置0
let columnindex = 0
let columnkeys:any[]=[]//把列名单独存起来，取的时候用columnkeys[columnindex]取，省的数据中缺少字段报错

//下拉框选项
let options = ref([
	{
		label: "合同",
		value: "contractQuery"
	},
	{
		label: '放款',
		value: "LoanInformation"
	},
	{
		label: '项目阶段',
		value: "projectStageQuery"
	},
	{
		label: "应收-实收",
		value: "receivableQuery"
	},
	{
		label: "核销明细",
		value: "verificationQuery"
	},
	{
		label: "租金表",
		value: "RepaymentPlan"
	}

])

//单独定义每一列的css样式，还未使用
// let rowProps = (row: any, rowIndex: any) => {
// 	return {
// 		style: "color: rgb(250, 31, 75);",
// 		onClick: () => {
// 			console.log(row)
// 		}
// 	}
// }

//对比数据是否一致，单独定义每个单元格的css样式
let cellProps = (row: any, rowIndex: any, column: any) => {

	//长度被列名个数整除，说明一行渲染完了,重新置0
	if (columnindex % columnkeys.length == 0) {
		columnindex = 0
	}
	//数据中缺失列名想要的某个字段,直接返回红色背景
	if (row[columnkeys[columnindex]] == undefined) {
		columnindex++
		return {
			style: "background-color: rgb(250, 31, 75);"
		}
	}
	//row中字段存在，判断数据是否相等
	if (row[columnkeys[columnindex]][0] != row[columnkeys[columnindex]][2]) {
		// console.log(Object.values(row)[columnindex])
		columnindex++
		return {
			style: "background-color: rgb(250, 31, 75);",
			onClick: () => {
				console.log(row, rowIndex)
			}
		}
	}
	columnindex++
	return {
		style: "color: rgb(29, 186, 71);",
		onClick: () => {
			console.log(row, rowIndex)
		}
	}
}

export default defineComponent({
	data() {
		return {
			columns,
			flash,
			pagination: { pageSize: 50 },
			options,
			scrollnum,
		}
	},
	setup() {
		//动态获取列名，对比数据，渲染表格
		const message = useMessage();//弹出框
		const getcolumns = () => {
			message.loading('正在请求数据，请耐心等待~', { duration: 4000 });
			axios({
				method: 'get',
				url: 'http://localhost:5000/getcomparedata',
				params: {
					templatecode1: templatecode1,
					templatecode2: templatecode2,
					majorkey: majorkey
				}
			}).then(
				success => {
					message.success('获取数据成功，正在对比...', { duration: 1000 });
					console.log('请求成功！');
					let fuckcolumns = []
					let keys = Object.keys(success.data.data[0]);//获取第一条数据的key做为列名
					for (let item of keys) {//遍历获得的keys,生成渲染表格列名所需要的数据格式
						fuckcolumns.push({
							'title': item,
							'key': item,
							'cellProps': cellProps,//cellProps用来对比数据渲染表格
						})
					}
					columnkeys=[]
					columnkeys = keys//列名以数组形式单独存起来
					scrollnum.value = keys.length * 150//根据表格字段的个数，动态定义表格横向长度
					columns.value = fuckcolumns//列名赋值
					flash.value = success.data//表中数据赋值
				},
				error => {
					message.error('出现错误！请排查问题~', { duration: 2000 });
					console.log('请求失败！');
					console.log(error.message);
				}
			)
		};
		//选择器,获取用户选择的值
		const handleUpdateValue1 = (value:any, option:any) => {
			message.info('模板编号是:' + JSON.stringify(value))
			templatecode1 = JSON.stringify(value)
			// console.log(templatecode1)
		};
		const handleUpdateValue2 = (value:any, option:any) => {
			message.info('模板编号是:' + JSON.stringify(value))
			templatecode2 = JSON.stringify(value)
			// console.log(templatecode2)
		}
		//获取用户输入的关联主键的值
		const getInputValue = (value: string) => {
			majorkey = value
		}
		return { getcolumns, handleUpdateValue1, handleUpdateValue2, getInputValue };
	}

});
</script>

<style scoped>
.horizontal-layout-group {
	display: flex;
	flex-direction: row;
}

:deep(.rowredcolor td) {
	/* color: rgba(128, 11, 122, 0) !important;  */
	color: rgb(250, 31, 75) !important;
}

:deep(.rowgreencolor td) {
	background-color: rgb(29, 186, 71) !important;
}

.cellredcolor {
	color: rgb(250, 31, 75) !important;
	background-color: rgba(255, 0, 0, 0.2) !important;
}

.cellgreencolor {
	color: rgb(29, 186, 71) !important;
	background-color: rgba(0, 255, 0, 0.2) !important;
}
</style>
