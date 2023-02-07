import pymongo
import os
import datetime
myclient = pymongo.MongoClient("mongodb://localhost:27017/")
print('DB Connected!')

mydb = myclient["capstone"]
mycol = mydb["CBIR"]
workdir = '/Users/aishaandatt/Downloads/CBIR/Brain_DS'
age = 0
for i in os.listdir(workdir):
    for j in os.listdir(workdir+'/'+i):
        age += 1
        mydict = {
            'path': workdir + '/' + i + '/' + j,
            'age': age,
            'date': datetime.datetime.now(),
            'feedback': i
        }
        mycol.insert_one(mydict)
print('INSERTED!')

print('Result')
# x = mycol.find()
# for data in x:
#     print(data)
