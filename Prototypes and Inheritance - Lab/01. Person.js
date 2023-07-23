function Person(firstName, lastName) {
    let fullName = `${firstName} ${lastName}`;

    return {
        get firstName() {
            return firstName;
        },
        set firstName(newFirstName) {
            if (isValidFullName(newFirstName + " " + lastName)) {
                firstName = newFirstName;
                fullName = `${firstName} ${lastName}`;
            }
        },
        get lastName() {
            return lastName;
        },
        set lastName(newLastName) {
            if (isValidFullName(firstName + " " + newLastName)) {
                lastName = newLastName;
                fullName = `${firstName} ${lastName}`;
            }
        },
        get fullName() {
            return fullName;
        },
        set fullName(newFullName) {
            const names = newFullName.split(" ");
            if (names.length === 2 && isValidFullName(newFullName)) {
                firstName = names[0];
                lastName = names[1];
                fullName = newFullName;
            }
        },
    };
    function isValidFullName(name) {
        const fullNameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
        return fullNameRegex.test(name);
    }
}

let person = new Person("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla