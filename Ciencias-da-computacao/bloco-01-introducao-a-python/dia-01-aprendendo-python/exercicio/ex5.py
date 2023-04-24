# 1 litro para cada 3 metros
# lata de tinta tem 18 litros
# preço da lata R$80
# retorna um tupla (quantidade de latas, preço total)

import math


def paint_costs(area):
    can_price = 80
    required_liters = area / 3
    required_cans = math.ceil(required_liters / 18)
    return required_cans, required_cans * can_price


print(paint_costs(50))
