from selenium import webdriver
from selenium.webdriver.common.by import By

# essa option é para indicar onde esta o meu firefox
# é somente para o meu caso
firefox_options = webdriver.FirefoxOptions()
firefox_options.binary_location = '/otp/firefox-bin'
firefox_options.add_argument('--headless')
firefox = webdriver.Firefox(options=firefox_options)

response = firefox.get("https://quotes.toscrape.com/")

search_quote = (
    firefox.find_element(By.CLASS_NAME, "quote")
    .find_element(By.CLASS_NAME, "text")
    .get_attribute("innerHTML")
)

print(search_quote)
