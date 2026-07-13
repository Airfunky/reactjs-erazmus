function App(){
  const students = [
    {
      name:"Rahim",
      age: 20,
      city: "Dhaka"
    },
     {
      name: "Ariful",
      age: 36,
      city: "Faro"
    },
     {
      name: "Jamal",
      age: 21,
      city: "Khnula"
    }
        ];

  return(
    <div>
      {students.map((student, index) => (<div key={index}>
        <h2>{student.name}</h2>
        <p>Age: {student.age}</p>
        <p>City: {student.city}</p>
      </div>
    ))}
    </div>
  );  
}

export default App;