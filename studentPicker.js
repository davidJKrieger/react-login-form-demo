const students = [
    "joe", "shadi", "alex", "nick", "destiny",
    "sami", "davis", "adam", "matt", "jacob", "dave", "calvin",
    "veda", "john", "will", "collin", "tommy", "ben"
]
console.log(students.length);
const groups = [];
for(let i = 0; i < 6; i++){
    let group = []
    for(let x = 0; x < 3; x++){
        let student = students.splice(Math.floor(Math.random() * students.length), 1)[0];
        console.log(student);
        group.push(student);
    }
    groups.push(group);
}
console.log(groups);