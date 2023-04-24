name_list = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def returnGreatName(list):
    greaterNamer = ''
    for name in list:
        if len(name) > len(greaterNamer):
            greaterNamer = name
    return greaterNamer


print(returnGreatName(name_list))
