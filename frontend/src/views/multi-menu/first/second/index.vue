<template>
	<div class="h-full">
		<n-card title="主页-待做事项" :bordered="false" class="h-full rounded-10px shadow-sm">
			<n-card>
				<n-space>
					<n-tag size="large" type="info">
						增加按钮,sql语句查询
					</n-tag>
					<n-tag size="large" type="success">
						统计查询接口
					</n-tag>
					<n-tag size="large" type="warning">
						数据对比颜色
					</n-tag>
					<n-tag size="large" type="error">
						字段英文与中文对应库
					</n-tag>
					<n-tag size="large" type="info">
						前端修改数据库连接
					</n-tag>

				</n-space>
			</n-card>
			<n-button @click="testclick">点击</n-button>
			<n-data-table :columns="columns" :data="data" :row-class-name="test" striped />
		</n-card>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

type RowData = {
	key: number
	name: string
	age: number
	address: string
}

const data: RowData[] = [
	{
		key: 0,
		name: 'John Brown',
		age: 32,
		address: 'New York No. 1 Lake Park'
	},
	{
		key: 1,
		name: 'Jim Green',
		age: 42,
		address: 'London No. 1 Lake Park'
	},
	{
		key: 2,
		name: 'Joe Black',
		age: 32,
		address: 'Sidney No. 1 Lake Park'
	}
]


let test = ref('too-old')

let testclick = () => {
	console.log("之前", test);
	if (test.value =='too-old') {
		test.value = ''
	}else {
		test.value = 'too-old' }
	console.log("之后", test)
}


const rowClassName = (row: any) => {
	console.log(row)
	if (row.age > 32) {
		return 'too-old'
	}
	return ''
}


export default defineComponent({


	data() {
		return {
			rowClassName,
			test,
			testclick
		}
	},
	setup() {
		return {
			data,
			columns: [
				{
					title: 'Name',
					key: 'name'
				},
				{
					title: 'Age',
					key: 'age',
				},
				{
					title: 'Address',
					key: 'address'
				}
			]
		}
	}
})
</script>

<style scoped>
:deep(.too-old td) {
	color: rgba(255, 0, 0, 0.75) !important;
}

:deep(.age) {
	color: rgba(0, 128, 0, 0.75) !important;
}

:deep(.too-old .age) {
	color: rgba(0, 0, 128, 0.75) !important;
}
</style>
