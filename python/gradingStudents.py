def gradingStudents(grades):
    for i, grade in enumerate(grades):
        grades[i] = roundGrade(grade)
    return grades
    
def roundGrade(score):
    if score < 38:
        return score
    elif (score % 5) >= 3:
        return score + (5 - (score % 5))
    else:
        return score
