def number_pair(n):
    pair_numbers = []
    for i in range(1, n + 1):
        if i % 2 == 0:
            pair_numbers.append(i)
    return len(pair_numbers)


print(number_pair(5))
