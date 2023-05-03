class Ventilador:
    def __init__(self, cor: str, price: int) -> None:
        self.cor = cor
        self.price = price
        self._ligado = False
        self.velocidade = 0
        self.velocidade_maxima = 3


ventilador_preto = Ventilador("preto", 300)


class Person:
    def __init__(self, name: str, money: int) -> None:
        self.name = name
        self.money = money
        self.ventilador = None

    def comprar_ventilador(self, ventilador: Ventilador) -> None:
        if ventilador.price <= self.money:
            self.money -= ventilador.price
            self.ventilador = ventilador

    def __str__(self):
        if self.ventilador:
            return "Sim, a pessoa possuo um ventilador"
        else:
            return "Não, a pessoa nao possuo um ventilador"


pessoa_com_money = Person("Jorge", 500)
pessoa_sem_money = Person("Luis", 100)

pessoa_com_money.comprar_ventilador(ventilador_preto)
print(pessoa_com_money)

pessoa_sem_money.comprar_ventilador(ventilador_preto)
print(pessoa_sem_money)
