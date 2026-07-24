let patients = [
    { name: "John", age: 25 },
    { name: "Alice", age: 40 },
    { name: "David", age: 65 },
    { name: "Emma", age: 18 }
];

patients.push({ name: "Sophia", age: 70 });

let oldest = patients[0];

for (let patient of patients) {
    if (patient.age > oldest.age) {
        oldest = patient;
    }
}

console.log(oldest);

// Expected Output:
// { name: 'Sophia', age: 70 }
