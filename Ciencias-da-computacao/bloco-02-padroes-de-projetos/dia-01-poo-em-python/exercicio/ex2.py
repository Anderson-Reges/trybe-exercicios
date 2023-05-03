from typing import List
from collections import Counter


class Estatistica:
    def __init__(self, numbers: List[int]) -> None:
        self.numbers = numbers

    def media(self) -> int:
        totalSum = 0
        for number in self.numbers:
            totalSum += number
        return totalSum / len(self.numbers)

    def mediana(self) -> int:
        numbers = sorted(self.numbers)
        index = len(numbers) // 2
        if len(numbers) % 2 == 0:
            return (numbers[index - 1] + numbers[index]) / 2

        return numbers[index]

    def moda(self) -> int:
        number, _ = Counter(self.numbers).most_common()[0]
        return number


estatistica = Estatistica([2, 4, 5, 7, 8, 9, 11])

print(estatistica.media())
print(estatistica.mediana())
print(estatistica.moda())
