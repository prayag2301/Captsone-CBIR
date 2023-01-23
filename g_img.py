from serpapi import GoogleSearch
import json
f = open('text.json')
data = json.load(f)
text = data['Text']
print(text)

params = {
    "q": text,
    "tbm": "isch",
    "ijn": "0",
    "api_key": "2e471876fab539e6a352a303cddc5e5a1224a9fc0a26ccb14bd35b2dcea70868"
}

search = GoogleSearch(params)
results = search.get_dict()
images_results = results["images_results"]
print(images_results)
