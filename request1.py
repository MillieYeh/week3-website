#網路連線
import urllib.request as request
import json
import csv

src="https://padax.github.io/taipei-day-trip-resources/taipei-attractions-assignment.json"
with request.urlopen(src) as response:
    data = json.load(response) #利用 json 模組處理 json 資料格式

#解讀資料欄位
list = data["result"]["results"]

with open("data.csv", "w", encoding="utf-8") as file:
    
    w = csv.writer(open("data.csv", "w", encoding="utf-8"))
    title = ['景點名稱','區域','經度','緯度','第一張圖檔網址']
    w.writerow(title)
    
    for final in list:
        if int(final["xpostDate"][0:4]) >= 2015 :
            total_list = []
            total_list.append(final["stitle"])
            total_list.append(final["address"][5]+final["address"][6]+final["address"][7])
            total_list.append(final["longitude"])
            total_list.append(final["latitude"])
            total_list.append('https' + final['file'].split('https')[1])
            
            w.writerow(total_list)
