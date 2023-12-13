from getFromSqlContext import getFromSqlContext
from getFormName import getFormName
from getFormSql import getFormSql

import time


#输入两个模板编号(用来获取语句配置中的sql查询数据)，一个关联主键，查出两套数据
#将数据按照主键进行排序，一一对比，返回字段相同的数据,格式为：
# {
# 'number':'数据条数',
# 'data':[
#       {[字段1，表1数值，表2数值],[字段2，表1数值，表2数值]},
#       {...},{...}]
# }
def getDataCompareResult(templateCode1,templateCode2,primaryKey):
    list1=[]
    list2=[]
    getDataCompare=[]
    a=getFromSqlContext(templateCode1)
    b=getFromSqlContext(templateCode2)
    if (a==None or b==None):
        return None
    for i in a:#将a和b两个字典进行比较，把可以对比数据按顺序放在list1和list2中
        for j in b:
            if i[primaryKey]==j[primaryKey]:
                list1.append(i)
                list2.append(j)
                if len(list1)>5000:
                    break
        if len(list1)>5000:#最多返回5000条，再多接口就太慢了，前端渲染顶不住了
            break
    # print(list1,list2)

    for x in range (0,len(list1)):#遍历list1和list2,返回字段名称相同的数据
        temporaryDict={}
        for (key1,value1) in list1[x].items():
            for (key2,value2) in list2[x].items():
                if key1==key2:
                    temporaryDict[key1]=[value1,'\n,    ',value2]
                    # print(key1,"===",value1,"==",value2)
        getDataCompare.append(temporaryDict)

    return {"number":len(list1),"data":getDataCompare}

#测试例子
# start=time.time()
# print(getDataCompareResult('contractQuery','LoanInformation','contractId'))
# end=time.time()
# print(end-start) 
   
