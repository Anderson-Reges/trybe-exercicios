ROSA = "\033[95m"
ROXO = "\033[94m"
AZUL = "\033[96m"
VERDE = "\033[92m"
LARANJA = "\033[93m"
VERMELHO = "\033[91m"
NEGRITO = "\033[1m"
ITALIC = "\x1B[3m"
SUBLINHADO = "\033[4m"
RESET = "\033[0m"

# print("\033[94mOlá Mundo!\033[0m")
# # ou
# print(f"{VERMELHO}Olá Mundo!{RESET}")


class Log:
    def dispara_log(self, message):
        return message


class LogError():
    def __init__(self, log) -> None:
        self.log: Log = log

    def dispara_log(self):
        return self.log.dispara_log(
            f"{VERMELHO}{ITALIC}Error{RESET}: O sistema está com erros"
        )


class LogWarning():
    def __init__(self, log) -> None:
        self.log: Log = log

    def dispara_log(self):
        return self.log.dispara_log(
            f"{LARANJA}{ITALIC}Warning{RESET}: O sistema está lento"
        )


class LogSuccess():
    def __init__(self, log) -> None:
        self.log: Log = log

    def dispara_log(self):
        return self.log.dispara_log(
            f"{VERDE}{ITALIC}Sucesso{RESET}: O sistema está com erros"
        )


log = Log()

sucess_log = LogSuccess(log)
error_log = LogError(log)
warning_log = LogWarning(log)

print(sucess_log.dispara_log())
print(error_log.dispara_log())
print(warning_log.dispara_log())
