//TODO: documentation?
function addStudents() {
    students = internalStudentsDB;
    // TODO: something is wrong here, please check
    for (let i = 0; i < 10; i++) {
        if (i % 2 == 0) {
            student = createRandomStudent();
            student.id = i
            student.name = "Chuck"
            students.push(student);
        }

    }
}

//TODO: documentation?
function checkBirthNumber(number) {
    //TODO: implement and TEST this! - hint: number 11
    return false;
}

//TODO: documentation?
function checkEmail(email) {
    //TODO: write tests
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}