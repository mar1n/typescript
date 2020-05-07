// const person: {
//     name: string;
//     age: number;
// } = {
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]
// } = {
//     name: 'Maximilain',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// }

// const Admin = 0
// const READ_ONLY = 1
// const AUTHOR = 2

enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR' }

const person = {
    name: 'Maximilain',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
}

// person.role.push('admin')
// person.role[1] = 10
// person.role[1, 'Szymon', 'sss']

let favoriteActivity: string[]
favoriteActivity = ['Sports']
console.log(person.name)

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}

if(person.role === Role.AUTHOR) {
    console.log('Admin')
}