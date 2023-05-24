def number_pair(n):
    if n == 1:
        return 0
    elif n % 2 == 0:
        return 1 + number_pair(n - 1)
    else:
        return number_pair(n - 1)


print(number_pair(5))
