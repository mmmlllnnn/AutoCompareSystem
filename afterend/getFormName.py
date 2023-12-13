import connectMysql
from configparser import ConfigParser

#获取表单对应的[名称+语句配置的模板编码]


def getFormName():
    #连接数据库配置
    conf=ConfigParser()
    conf.read("conf.ini",encoding='utf-8')
    mysqlHost = conf['mysql']['mysqlHost']#ip
    mysqlUser = conf['mysql']['mysqlUser']#user
    mysqlPassword = conf['mysql']['mysqlPassword']#pwd
    mysqlDb = conf['mysql']['mysqlDb']#数据库名
    # print(mysqlHost,mysqlUser,mysqlPassword,mysqlDb)


    sql='SELECT title,uniqueCode,category FROM schema_config ORDER BY category'

    mysqlresult = connectMysql.mysql(   mysqlHost,
                                        mysqlUser,
                                        mysqlPassword,
                                        mysqlDb,
                                        sql,
                                        'all')
    #打印结果看一下
    # for i in mysqlresult:   
    #     print(i['category'],i['title'],i['uniqueCode'])
    return mysqlresult
    
