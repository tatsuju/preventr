import pyreadr
import json
import os

# 設定路徑
os.chdir(r'C:\Users\USER\Documents\GitHub\preventr')

# 安裝需要的套件（如果還沒安裝）
# pip install pyreadr

# 讀取 .rda 檔案
result = pyreadr.read_r('R/sysdata.rda')

# 顯示載入的物件
print("載入的物件:")
print("=" * 50)
for key in result.keys():
    print(f"\n物件名稱: {key}")
    obj = result[key]
    print(f"類型: {type(obj)}")
    print(f"形狀: {obj.shape if hasattr(obj, 'shape') else 'N/A'}")
    
    # 如果是 DataFrame，顯示欄位
    if hasattr(obj, 'columns'):
        print(f"欄位: {list(obj.columns)}")
        print(f"\n前5行:")
        print(obj.head())

# 將所有物件儲存為可讀格式
output = {}
for key in result.keys():
    obj = result[key]
    if hasattr(obj, 'to_dict'):
        output[key] = obj.to_dict()
    else:
        output[key] = str(obj)

# 儲存為 JSON
with open('preventr_data.json', 'w', encoding='utf-8') as f:
    json.dump(output, f, indent=2, ensure_ascii=False)

print(f"\n資料已儲存至 preventr_data.json")

# 詳細探索報告
with open('preventr_exploration.txt', 'w', encoding='utf-8') as f:
    f.write("PREVENTR 資料探索報告\n")
    f.write("=" * 50 + "\n\n")
    
    for key in result.keys():
        f.write(f"\n{'=' * 30}\n")
        f.write(f"物件: {key}\n")
        f.write(f"{'=' * 30}\n")
        
        obj = result[key]
        f.write(f"類型: {type(obj)}\n")
        
        if hasattr(obj, 'shape'):
            f.write(f"維度: {obj.shape}\n")
        
        if hasattr(obj, 'columns'):
            f.write(f"欄位: {list(obj.columns)}\n\n")
            f.write("詳細內容:\n")
            f.write(str(obj))
        else:
            f.write(f"內容:\n{obj}\n")
        
        f.write("\n")

print("詳細報告已儲存至 preventr_exploration.txt")