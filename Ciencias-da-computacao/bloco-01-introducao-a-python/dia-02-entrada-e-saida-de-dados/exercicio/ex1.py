name = "PEDRO"


def print_inverted_name(name):
    for letter in range(len(name)):
        for index in range(len(name) - letter):
            print(name[index], end="")
        print()


print_inverted_name(name)
