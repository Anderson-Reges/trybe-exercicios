class Eletrodomestico:
    def __init__(self, volts: int) -> None:
        self.ligado = False
        self.velocidade = 0
        self.volts = volts

    @property
    def volt(self):
        return self.volts

    def print_volts(self):
        print(self.volts)


class Secador(Eletrodomestico):
    def __init__(self, volts: int) -> None:
        super().__init__(volts)


class Batedeira(Eletrodomestico):
    def __init__(self, volts: int) -> None:
        super().__init__(volts)


class MaquinaDeLavar(Eletrodomestico):
    def __init__(self, volts: int) -> None:
        super().__init__(volts)


secador = Secador(150)
batedeira = Batedeira(200)
maquina_de_lavar = MaquinaDeLavar(300)

print(f"O secador tem {secador.volt} volts")
print(f"A batedeira tem {batedeira.volt} volts")
print(f"A maquina de lavar tem {maquina_de_lavar.volt} volts")

