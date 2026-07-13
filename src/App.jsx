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

    
  return(
    <div>
      {students.slice(3, 4).map((student, index) => (
        <h2 key={index}> {student}</h2>
      ))}
    </div>
  );  
}

export default App;