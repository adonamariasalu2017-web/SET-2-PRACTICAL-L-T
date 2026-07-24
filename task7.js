let patients = [
    { name: "John", age: 25 },
    { name: "Alice", age: 15 },
    { name: "David", age: 65 },
    { name: "Emma", age: 17 }
];

for (let patient of patients) {
    if (patient.age < 18) {
        continue;
    }

    console.log(patient.name, patient.age);
}

// Expected Output:
// John 25
// David 65
