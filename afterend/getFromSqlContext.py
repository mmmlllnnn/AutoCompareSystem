import connectMysql
from getFormSql import getFormSql
from configparser import ConfigParser
import re
# 输入表单对应的语句配置==模板编号
# 返回语句配置中sql语句所查询出的内容

def getFromSqlContext(codename):
    if codename=='':
        return  
    sql=getFormSql(codename)#传入语句配置中的模板编号，得到sql语句
    if sql==None or sql=='null':#得到的sql语句为空直接返回
        return 

    #用正则表达式去掉sql语句中$:lablab等内容
    pattern=r"\$:\w+"
    sql=re.sub(pattern,'',sql)

    #连接数据库配置
    conf=ConfigParser()
    conf.read("conf.ini",encoding='utf-8')
    mysqlHost = conf['mysql']['mysqlHost']#ip
    mysqlUser = conf['mysql']['mysqlUser']#user
    mysqlPassword = conf['mysql']['mysqlPassword']#pwd
    mysqlDb = conf['mysql']['mysqlDb']#数据库明
    # print(mysqlHost,mysqlUser,mysqlPassword,mysqlDb)

    mysqlresult = connectMysql.mysql(   mysqlHost,
                                        mysqlUser,
                                        mysqlPassword,
                                        mysqlDb,
                                        sql,
                                        'all')
    # print(mysqlresult)
    return mysqlresult


# print(getFromSqlContext('whiteListCustQuery'))