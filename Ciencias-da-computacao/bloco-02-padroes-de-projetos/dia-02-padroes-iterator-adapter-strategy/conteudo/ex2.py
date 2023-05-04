table_list = [
    {"name": "Morgana", "age": "22"},
    {"name": "Sarah", "age": "24"},
    {"name": "Will", "age": "33"},
    {"name": "Rick", "age": "23"},
    {"name": "John", "age": "22"},
    {"name": "Peter", "age": "35"},
    {"name": "Groove", "age": "48"},
    {"name": "Sam", "age": "19"},
]

inter = iter(table_list)

print(inter)

next = next(inter)

print(next)
