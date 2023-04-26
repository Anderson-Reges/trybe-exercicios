import random
guess_remain = 3

with open("words.txt") as file:
    words_list = [word.strip() for word in file]

while guess_remain != 0:
    word = random.choice(words_list)
    scrambled_word = "".join(random.sample(word, len(word)))
    print(f"A palavra embaralhada é: {scrambled_word}")
    word_input = input("Digite sua Resposta: ")
    if word_input != word:
        guess_remain -= 1
        print(f"Você tem {guess_remain} papites restantes")
    elif word_input == word:
        print("Parabens você acertou!!!")
        break
    if guess_remain == 0:
        print("Lamento você perder :(")
