function StudentList({students}){
    return(
        <div>
        {
        
            students.map((student, index) => <h2 key={index}>
                {student.name}  {student.age}  {student.city}
                </h2>
                )
        }
        </div>
    );
}

export default StudentList;