from selenium import webdriver
from selenium.webdriver.common.by import By

# essa option é para indicar onde esta o meu firefox
# é somente para o meu caso
firefox_options = webdriver.FirefoxOptions()
firefox_options.binary_location = '/otp/firefox-bin'
firefox_options.add_argument('--headless')

firefox = webdriver.Firefox(options=firefox_options)


def scrape(url):
    firefox.get(url)
    paragraphs = firefox.find_elements(By.TAG_NAME, 'p')
    for p in paragraphs:
        print(p.text)


scrape(
    'https://www.wikimetal.com.br/iron-maiden-scorpions-kiss-veja-melhores-albuns-1982/'
)
