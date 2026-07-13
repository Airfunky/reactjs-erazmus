function App(){
  const students = [
    "Rahim",
    "Karim",
    "Jamal",
    "bob",
    "ariful",
    "ari",
    "arivederci"
        ];

    const showStudents = ["Rahim", "Jamal"];
  return(
    <div>
      {students
          .filter((student) => showStudents.includes(student))
          .map((student, index) => (
            <h2 key={index}>{student}</h2>
          ))}
    </div>
  );  
}

export default App;