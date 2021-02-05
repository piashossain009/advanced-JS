const students = [
    {id:32, name: 'jack'},
    {id:45, name:'manna'},
    {id:65, name: 'dipu'}
];

const output = [];
for( let i=0; i < students.length; i++){
    let element = students[i];
    output.push(element.name);
}
console.log(output);

// advanced way 
const names = students.map( s => s.name);
console.log(names);

const ids = students.map( s => s.id );
console.log(ids);

const findIds = students.filter( s => s.id >40);
console.log(findIds);
const findId = students.find( s => s.id >40);
console.log(findId);