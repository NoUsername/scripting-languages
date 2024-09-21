# /// script
# requires-python = ">=3.12"
# dependencies = ["requests"]
# ///
import requests

r = requests.get('https://jsonplaceholder.typicode.com/posts')
for idx, post in enumerate(r.json()[:5]):
    with open(f'out_{idx}.txt', 'w') as file:
        file.write(post['title'])

