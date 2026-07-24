let patients = [
    { name: "John", age: 25 },
    { name: "Alice", age: 40 },
    { name: "David", age: 65 },
    { name: "Emma", age: 18 }
];

patients.pop();

patients.sort((a, b) => a.age - b.age);

console.log(patients);

// Expected Output:
// [
//   { name: 'Emma', age: 18 },
//   { name: 'John', age: 25 },
//   { name: 'Alice', age: 40 }
// ]
