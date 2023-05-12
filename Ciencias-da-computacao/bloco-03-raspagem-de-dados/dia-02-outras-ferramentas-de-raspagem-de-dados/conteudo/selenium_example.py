# importação do webdriver, que é o que possibilita a implementação para todos
# os principais navegadores da web
from time import sleep
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

# criação de uma instância de navegador utilizando o Firefox
firefox_options = webdriver.FirefoxOptions()
firefox_options.binary_location = '/otp/firefox-bin'
firefox = webdriver.Firefox(options=firefox_options)

# requisições para essa instância criada utilizando o método `get`
# response = firefox.get("https://www.python.org/")
response = firefox.get("https://www.google.com.br/")
search_input = firefox.find_element("name", "q")
search_input.send_keys("selenium")
search_input.send_keys(Keys.ENTER)
