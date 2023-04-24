list_numbers = [1, 2, 3, 4, 5]


def calculatingArithmeticMean(list):
    sumNumbers = 0
    for number in list:
        sumNumbers = sumNumbers + number
    return sumNumbers / len(list)


print(calculatingArithmeticMean(list_numbers))
