import requests


quote = requests.get(
    "https://scrapethissite.com/pages/advanced/?gotcha=headers",
    headers={"User-agent": "Mozilla", "Accept": "text/html"},
)

assert "bot detected" not in quote.text

print(quote.text)
