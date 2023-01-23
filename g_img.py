from serpapi import GoogleSearch
import json
f = open('text.json')
data = json.load(f)
f2 = open('api_key.json')
key = json.load(f2)

params = {
    "q": data['Text'],
    "tbm": "isch",
    "ijn": "0",
    "api_key": key['key'] 
}

search = GoogleSearch(params)
results = search.get_dict()
images_results = results["images_results"]
print(images_results)
