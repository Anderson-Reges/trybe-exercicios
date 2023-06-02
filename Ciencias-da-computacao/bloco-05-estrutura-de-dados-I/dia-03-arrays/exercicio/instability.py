def time_the_instabilities(arr: list) -> int:
    max_time = 0
    current_time = 0
    for value in arr:
        if value == 1:
            current_time += 1
        else:
            current_time = 0
        if current_time >= max_time:
            max_time = current_time
    return max_time
