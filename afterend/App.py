from flask import Flask,request
from getExistFormNameAndCode import getExistFormNameAndCode
from getDataCompareResult import getDataCompareResult
from flask_cors import CORS
from connectMysql import mysql
import time
app=Flask(__name__)
CORS(app, supports_credentials=True)

#启动命令
#flask --app App run


@app.route('/getfromname', methods=["GET"])#获取已经配置过的表单的信息：名称+语句配置模板code+隶属分类
def ExistFormNameAndCode():
    return getExistFormNameAndCode()


@app.route('/getcomparedata', methods=["GET"])#获取已经配置过的表单的信息：名称+语句配置模板code+隶属分类
def DataCompare():
    if request.method == "GET":
      templatecode1=request.args.get("templatecode1").replace('"','')
      templatecode2=request.values.get("templatecode2").replace('"','')
      majorkey=request.values.get("majorkey")
      # print(templatecode1,templatecode2,majorkey)
    return getDataCompareResult(templatecode1,templatecode2,majorkey)
    # return getDataCompareResult('contractQuery','LoanInformation','contractId')
 

# print(getExistFormNameAndCode())
# start=time.time()
# print(getDataCompareResult('contractQuery','LoanInformation','contractId'))
# end=time.time()
# print(end-start) 





if __name__=='__main__':
  app.run(host='0.0.0.0',port='5000')


