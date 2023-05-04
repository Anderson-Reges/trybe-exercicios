from collections.abc import Iterable, Iterator
from ex2 import Baralho, Carta


class IteradorDoBaralhoInverso(Iterator):
    def __init__(self, cartas):
        self._cartas_inversas = cartas
        self._pos = -1

    def __next__(self):
        try:
            carta = self._cartas_inversas[self._pos]
            print(carta)
        except IndexError:
            raise StopIteration()
        else:
            self._pos -= 1
            return carta


class BaralhoInverso(Baralho, Iterable):
    def __init__(self):
        super().__init__()
        self._cartas_inversas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]

    def __iter__(self):
        return IteradorDoBaralhoInverso(self._cartas_inversas)

    def __str__(self) -> str:
        return f"{[carta for carta in self]}"


baralho = BaralhoInverso()
print(baralho)
