from selenium import webdriver
from selenium.webdriver.common.by import By

# essa option é para indicar onde esta o meu firefox
# é somente para o meu caso
firefox_options = webdriver.FirefoxOptions()
firefox_options.binary_location = '/otp/firefox-bin'
firefox_options.add_argument('--headless')

firefox = webdriver.Firefox(options=firefox_options)


def scrap(url: str) -> list[dict]:
    posts = list()
    firefox.get(url)
    for post in firefox.find_elements(By.CLASS_NAME, "col-md-4"):
        new_post = dict()
        new_post["title"] = (
            post.find_element(By.TAG_NAME, "h3")
            .find_element(By.TAG_NAME, "a")
            .get_attribute("innerHTML")
        )

        new_post["link"] = (
            post.find_element(By.TAG_NAME, "h3")
            .find_element(By.TAG_NAME, "a")
            .get_attribute("href")
        )
        print(new_post)
        posts.append(new_post)

    return posts


print(scrap("https://diolinux.com.br/"))
