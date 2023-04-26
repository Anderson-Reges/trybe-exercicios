import re


def validate_email(email: str):
    regex = r'^[\w\.\+\-]+\@[\w]+\.[a-z]{2,3}$'
    for_user_name = r'^[a-zA-Z0-9_-]+$'
    username, dominio = email.split("@")
    website, extensao = dominio.split(".")

    if not re.match(regex, email):
        raise ValueError("Email invalido")
    elif not re.match(for_user_name, username):
        raise ValueError("Nome de usuario invalido")
    elif not username[0].isalpha():
        raise ValueError("Nome de usuario tem que começar com uma letra")
    elif not website.isalnum():
        raise ValueError("O nome do Website tem que ter letras e numeros")
    elif len(extensao) > 3:
        raise ValueError("A Extensão so pode ter 3 caracteres")
