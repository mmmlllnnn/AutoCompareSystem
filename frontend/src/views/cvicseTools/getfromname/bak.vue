
<!-- <n-space>
	<n-gradient-text :size="15">共有数据：{{}}条</n-gradient-text>
	<n-button type="primary">点击获取数据</n-button>
</n-space> -->


<template>
  <n-data-table
	:columns="columns"
	:data="data"
	:row-class-name="rowClassName" />
</template>

<script setup>
import { computed, ref } from "vue"
import { NDataTable } from "naive-ui"

// 假设你的数据是从一个API获取的
const apiData = ref({
  number: 7,
  data: [
    {
      id: ["7957346279361929572", "7957346279361929646"],
      contractId: ["7957346279361929572", "7957346279361929572"],
      custId: ["7928397615668977743", "7928397615668977743"],
    },
    {
      id: ["4545445454545556564", "4545445454545556564"],
      contractId: ["85757575751929572", "85757575751929572"],
      custId: ["qwqwqw668977743", "qwqwqw668977743"],
    },
  ],
})

// 把数据转换成表格需要的格式
const columns = computed(() => {
  // 取出data中的第一个对象的键作为列名
  const keys = Object.keys(apiData.value.data[0])
  // 返回一个包含列名和渲染函数的数组
  return keys.map((key) => ({
    title: key,
    key,
    render(row) {
      // 如果value数组中的两个值相同，就直接返回
      if (row[key][0] === row[key][1]) {
        return row[key][0]
      }
      // 否则，返回一个用逗号分隔的字符串，并加上红色背景色的样式
      else {
        return (
          <span style="background-color: red">
            {row[key][0]},{row[key][1]}
          </span>
        )
      }
    },
  }))
})

// 把apiData中的data赋值给表格的data
const data = computed(() => apiData.value.data)

// 定义一个函数，根据value数组中的值是否相同，返回不同的行类名
const rowClassName = (row) => {
  // 遍历row中的每个键值对
  for (let [key, value] of Object.entries(row)) {
    // 如果value数组中的两个值不同，就返回一个带有红色边框的类名
    if (value[0] !== value[1]) {
      return "red-border"
    }
  }
  // 否则，返回空字符串
  return ""
}
</script>

<style scoped>
/* 定义一个带有红色边框的类名 */
.red-border {
  border: 2px solid red;
}
</style>
