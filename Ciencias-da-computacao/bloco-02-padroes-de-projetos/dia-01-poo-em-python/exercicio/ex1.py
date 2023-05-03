class Tv:
    def __init__(self, tamanho) -> None:
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    def aumentar_volume(self) -> None:
        if self.__volume < 99:
            self.__volume += 1

    def diminuir_volume(self) -> None:
        if self.__volume > 0:
            self.__volume -= 1

    def modificar_canal(self, canal: int) -> None:
        if not 1 < canal < 99:
            raise ValueError("Os canais estão entre 1 e 99")
        self.__canal = canal

    def ligar_desligar(self):
        self.__ligada = not self.__ligada
