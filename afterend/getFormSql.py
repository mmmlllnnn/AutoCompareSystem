import connectMysql
import json
from configparser import ConfigParser

# 输入表单对应的语句配置模板
# 返回语句配置中的sql语句


def getFormSql(codename):
    #连接数据库配置
    conf=ConfigParser()
    conf.read("conf.ini",encoding='utf-8')
    mysqlHost = conf['mysql']['mysqlHost']#ip
    mysqlUser = conf['mysql']['mysqlUser']#user
    mysqlPassword = conf['mysql']['mysqlPassword']#pwd
    mysqlDb = conf['mysql']['mysqlDb']#数据库明
    # print(mysqlHost,mysqlUser,mysqlPassword,mysqlDb)

    if codename=='':#传了空字符串，直接返回
        return 'null'
    
    sql='SELECT extInfo FROM sql_config  WHERE code="{name}"'.format(name=codename)
    # print("sql",sql)
    mysqlresult = connectMysql.mysql(  mysqlHost,
                                mysqlUser,
                                mysqlPassword,
                                mysqlDb,
                                sql,
                                'all')
    
    if type(mysqlresult)==tuple:#没查到东西，就直接返回
        return 'null'

    lastresult=json.loads(mysqlresult[0]['extInfo'])
    lastresult=lastresult['command']
    return lastresult
