from getExistFormNameAndCode import getExistFormNameAndCode
from getDataCompareResult import getDataCompareResult
from getFormSql import getFormSql
from getFormName import getFormName
from getExistFormNameAndCode import getExistFormNameAndCode
from getFromSqlContext import getFromSqlContext
import re

#获取所有表单信息
# print(getFormName())

#获取已经存在的表单信息==和语句配置能一一对应
# print(getExistFormNameAndCode())

# 通过模板编号查sql语句
# print(getFormSql('contractQuery'))
# print(getFormSql('LoanInformation'))

#通过模板编号直接查询出数据
# print(getFromSqlContext('contractQuery'))
# print(getFromSqlContext('projectStageQuery'))

#通过2个模板编号和关联主键对比数据
# print(getDataCompareResult('contractQuery','LoanInformation','contractId'))
# print(getDataCompareResult('projectStageQuery','projectStageQuery','custId'))