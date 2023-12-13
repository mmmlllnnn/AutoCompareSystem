# AutoCompareSystem

## 作用/前言
基于 ***Vue3+Naive+Flask*** 的业务系统数据对比展示雏形<br>
在公司的时候，领导非常抽象的描述了一种金融租赁业务系统数据处理后的溯源、对比模型<br>
总之，我也妹有听懂，人家要一个咋样滴系统，不过咱负责开发就完事了<br>
<br>
但是后来从公司离职了，此事搁浅。这半残的项目是在家开发的，用的数据也是模拟数据，不违反什么保密协议，于是放在此处。
<br>
<br>
总之，对你来说大概率是没有什么用了



## 后端
连接业务系统数据库，处理并生成用于金融租赁不同业务的对比数据。<br>
商机管理+项目立项+租赁方案+租赁合同+放款方案<br>
使用Flask框架，提供接口给前端。<br>



## 前端
模板使用了:Soybean Admin
>[Soybean Admin](https://github.com/honghuangdc/soybean-admin) 是一个基于 Vue3、Vite3、TypeScript、NaiveUI、Pinia 和 UnoCSS 的清新优雅的中后台模版，它使用了最新流行的前端技术栈，开箱即用的中后台前端解决方案，也可用于学习参考。

主要是用到了Naive-UI的表格组件，负责展示接口数据，并渲染为不同颜色。其他功能还没做。

## 截图
![](https://cdn.jsdelivr.net/gh/mmmlllnnn/AutoCompareSystem/1.jpg)
![](https://cdn.jsdelivr.net/gh/mmmlllnnn/AutoCompareSystem/2.jpg)
![](https://cdn.jsdelivr.net/gh/mmmlllnnn/AutoCompareSystem/3.jpg)