import requests
import json

responese = requests.get("https://api.stackexchange.com//2.3/questions?order=desc&sort=activity&site=stackoverflow")


for i in responese.json()['items']:
    print(i['title'])
    print("link is->>>>>"+i['link']+"\n")