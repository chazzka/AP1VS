
class Student {
    constructor(id, name, surname, email, birthNumber) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.birthNumber = birthNumber;
    }
}

function createRandomStudent() {
    let name = faker.name.findName();
    let email = faker.internet.email();
    name = name.split(" ");
    let bn = Math.floor(Math.random() * 100) * 11;
    let id = 0;
    let student = new Student(id, name[0], name[1], email, bn)
    return student;
}

const internalStudentsDB = []

$(function () {
    addStudents();
    $.each(internalStudentsDB, function (_,obj) {
        $('#table').append("<tr><td>" + obj.id + "</td><td>" + obj.name + "</td><td>" + obj.surname + "</td><td>" + obj.email + "/" + checkEmail(obj.email) + "</td><td>" + checkBirthNumber(obj.birthNumber) + "</td></tr>")
    })
})
