import json
import pandas as pd

# 讀取 preventr_data.json
with open('preventr_data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# 只提取我們需要的基礎模型和30年模型
needed_models = ['base_10yr', 'base_30yr']
extracted_data = {}

for model_name in needed_models:
    if model_name in data:
        # 將數據轉換為更簡潔的格式
        model_data = data[model_name]
        
        # 如果是 DataFrame 格式的字典，需要特殊處理
        if isinstance(model_data, dict) and 'beta_coefficients' in model_data:
            # 重新組織數據
            coefficients = {}
            df_data = pd.DataFrame(model_data)
            
            for idx, row in df_data.iterrows():
                var_name = row['beta_coefficients']
                coefficients[var_name] = {
                    'female_cvd': row['female_total_cvd'],
                    'male_cvd': row['male_total_cvd'],
                    'female_ascvd': row['female_ascvd'],
                    'male_ascvd': row['male_ascvd'],
                    'female_hf': row['female_heart_failure'],
                    'male_hf': row['male_heart_failure']
                }
            
            extracted_data[model_name] = coefficients
        else:
            extracted_data[model_name] = model_data

# 生成精簡的 JavaScript 檔案
js_output = """// PREVENT™ 完整係數 - 10年和30年模型
// 從 preventr_data.json 提取

const PREVENT_COMPLETE_COEFFICIENTS = {
"""

# 處理10年模型
if 'base_10yr' in extracted_data:
    js_output += "    // 10年基礎模型\n"
    js_output += "    base_10yr: {\n"
    
    for var_name, values in extracted_data['base_10yr'].items():
        js_output += f"        '{var_name}': {{\n"
        js_output += f"            female_cvd: {values['female_cvd']},\n"
        js_output += f"            male_cvd: {values['male_cvd']},\n"
        js_output += f"            female_ascvd: {values['female_ascvd']},\n"
        js_output += f"            male_ascvd: {values['male_ascvd']},\n"
        js_output += f"            female_hf: {values['female_hf']},\n"
        js_output += f"            male_hf: {values['male_hf']}\n"
        js_output += "        },\n"
    
    js_output += "    },\n\n"

# 處理30年模型
if 'base_30yr' in extracted_data:
    js_output += "    // 30年基礎模型\n"
    js_output += "    base_30yr: {\n"
    
    for var_name, values in extracted_data['base_30yr'].items():
        js_output += f"        '{var_name}': {{\n"
        js_output += f"            female_cvd: {values['female_cvd']},\n"
        js_output += f"            male_cvd: {values['male_cvd']},\n"
        js_output += f"            female_ascvd: {values['female_ascvd']},\n"
        js_output += f"            male_ascvd: {values['male_ascvd']},\n"
        js_output += f"            female_hf: {values['female_hf']},\n"
        js_output += f"            male_hf: {values['male_hf']}\n"
        js_output += "        },\n"
    
    js_output += "    }\n"

js_output += "};\n"

# 寫入檔案
with open('prevent_coefficients_complete.js', 'w', encoding='utf-8') as f:
    f.write(js_output)

# 也創建一個更小的摘要檔案
summary = {
    "model_count": len(extracted_data),
    "models": list(extracted_data.keys()),
    "variable_count": {
        model: len(coeffs) for model, coeffs in extracted_data.items()
    }
}

with open('prevent_summary.json', 'w', encoding='utf-8') as f:
    json.dump(summary, f, indent=2)

print("提取完成！")
print(f"已創建 prevent_coefficients_complete.js ({len(js_output)} bytes)")
print(f"已創建 prevent_summary.json")

# 顯示摘要
print("\n摘要：")
for model_name, coeffs in extracted_data.items():
    print(f"\n{model_name}:")
    print(f"  變數數量: {len(coeffs)}")
    if coeffs:
        print(f"  變數列表: {list(coeffs.keys())[:5]}... (顯示前5個)")

# 計算並顯示基線生存率
import numpy as np

print("\n基線生存率計算：")
for model_name in ['base_10yr', 'base_30yr']:
    if model_name in extracted_data and 'Constant' in extracted_data[model_name]:
        constants = extracted_data[model_name]['Constant']
        print(f"\n{model_name}:")
        
        for key, const_value in constants.items():
            if isinstance(const_value, (int, float)):
                s0 = np.exp(-np.exp(const_value))
                print(f"  {key}: S0 = {s0:.6f} (constant = {const_value})")