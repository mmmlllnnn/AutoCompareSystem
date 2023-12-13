import pymysql

# 连接Mysql执行sql语句
# 返回查询结果，默认50条

def mysql(host, user, password, db, sql,getway='50'):
    mysql = {}
    conn = pymysql.connect(host=host,
                           user=user,
                           password=password,
                           db=db,
                           autocommit=True)
    cur = conn.cursor(pymysql.cursors.DictCursor)#定义游标
    cur.execute(sql)#执行sql

    
    if getway == 'all':
        result=cur.fetchall()#取全部数据
    else:
        result=cur.fetchmany(int(getway))#取50条或者指定条数的数据
    
    cur.close()#关闭数据库链接
    conn.close()#关闭游标
    return result
