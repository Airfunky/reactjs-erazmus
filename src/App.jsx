import StudentList from "./StudentList";

function App() {
  const students = [
  {
    name: "Rahim",
    age: 20,
    city: "Dhaka"
  },
  {
    name: "Jamal",
    age: 25,
    city: "warsaw"
  },
  {
    name: "Ariful",
    age: 36,
    city: "Faro"
  }
];

  return (
    <StudentList students = {students}/>
  );
}

export default App;