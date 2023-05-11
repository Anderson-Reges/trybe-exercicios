import requests


quote = requests.get("https://api.github.com/users")
users = quote.json()
for user in users:
    print(f"{user['login']} {user['url']}")
