recu_students = []
with open("students.txt") as grades_file:
    for line in grades_file:
        student_grade = line
        student_grade = student_grade.split(" ")
        if int(student_grade[1]) < 6:
            recu_students.append(student_grade[0] + "\n")


with open("recuStudents.txt", mode="w") as recu_students_file:
    recu_students_file.writelines(recu_students)
