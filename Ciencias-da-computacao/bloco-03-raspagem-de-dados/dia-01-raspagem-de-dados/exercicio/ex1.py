import requests


quote = requests.get("https://httpbin.org/encoding/utf8")

print(quote.text)
