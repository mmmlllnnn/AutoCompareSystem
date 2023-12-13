import connectMysql
from configparser import ConfigParser
from getFormName import getFormName
#获取已经存在的(和语句配置有一一对应的表单)
# [名称+语句配置的模板编码]

def getExistFormNameAndCode():
    getExistFormNameAndCodeResult=[]
    #连接数据库,获取sql_config(语句配置)中的模板编号code和name
    conf=ConfigParser()
    conf.read("conf.ini",encoding='utf-8')
    mysqlHost = conf['mysql']['mysqlHost']#ip
    mysqlUser = conf['mysql']['mysqlUser']#user
    mysqlPassword = conf['mysql']['mysqlPassword']#pwd
    mysqlDb = conf['mysql']['mysqlDb']#数据库名
    # print(mysqlHost,mysqlUser,mysqlPassword,mysqlDb)

    sql='SELECT code,name FROM sql_config'

    mysqlresult1 = connectMysql.mysql(  mysqlHost,
                                        mysqlUser,
                                        mysqlPassword,
                                        mysqlDb,
                                        sql,
                                        'all')

    #获取所有的表单名称和编号
    # 与上面得到的语句配置进行对比，得到已经存在语句配置的表单
    mysqlresult2=getFormName()
    for i in mysqlresult2:
        for j in mysqlresult1:
            if i['uniqueCode']==j['code']:
                getExistFormNameAndCodeResult.append(i)

    return {'number':len(getExistFormNameAndCodeResult),'data':getExistFormNameAndCodeResult}

#测试例子
# print(getExistFormNameAndCode())