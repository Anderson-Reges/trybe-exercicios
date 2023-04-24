def returnSpecifiedTriangle(A, B, C):
    is_triangle = (
      A + B > C and
      B + C > A and
      A + C > B
    )
    if not is_triangle:
        print("não é triângulo")
    elif A == B == C:
        print("Triângulo Equilátero")
    elif A == B or B == C or A == C:
        print("Triângulo Isósceles")
    else:
        print("Triângulo Escaleno")


returnSpecifiedTriangle(9, 9, 9)
returnSpecifiedTriangle(9, 9, 5)
returnSpecifiedTriangle(9, 5, 7)
