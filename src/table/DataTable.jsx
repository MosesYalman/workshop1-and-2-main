import React, { useState } from "react";


export default function DataTable() {
    // the initial state with objects containing the student data/properties.
    const initialData = [
        { id: 1, firstname: "Jack", lastname: "Hammer", age: 27, birthDate: "1995-02-23", country: "Germany", city: "Hamburg" },
        { id: 2, firstname: "Joey", lastname: "Lawrence", age: 37, birthDate: "1985-07-22", country: "USA", city: "Florida" },
        { id: 3, firstname: "Hasse", lastname: "Andersson", age: 42, birthDate: "1980-01-13", country: "Sweden", city: "Gothenburg" },
        { id: 4, firstname: "John", lastname: "Keen", age: 23, birthDate: "1999-12-03", country: "Canada", city: "Quebec" },
        { id: 5, firstname: "Raymond", lastname: "Reddington", age: 57, birthDate: "1965-04-28", country: "USA", city: "New York" },
    ];

    const [studentList] = useState(initialData);
    // showDetails state for displaying student details with a boolean,the button onclick function displayData returns a true value and the properties
    const [showDetails, setShowDetails] =useState(false);
    const studentDefaultData = { id: 0, firstname: "", lastname: "", age: 0, birthDate: "", country: "", city: "" }
    const [student, setStudent] = useState(studentDefaultData);
    // functionconponent that returns table header
    const TableHeader = () => {
        return (
            <thead className="table-light">
                <td>Id</td>
                <td>FirstName</td>
                <td>LastName</td>
                <td>Age</td>
                <td>Action</td>
            </thead>
        );
    };

    // functionconponent 
    const TableRow = (props) => {
        return (
            <tbody>
                {
                    props.studentList.map((student) => {
                        const {id, firstname, lastname, age } = student;
                        return (
                            <tr key={id}>
                                <td>(id)</td>
                                <td>(firstname)</td>
                                <td>(lastname)</td>
                                <td>(age)</td>
                                <td><TableAction student={student} /></td>
                                </tr>
                        )
                    })
                }
            </tbody>
        )
    }


    // functionconponent action 
    const TableAction = ({ student }) => {
        const displayData = () => {
            setShowDetails(true);
            setStudent(student);
        };
        return <button type="button" classname="btn btn-primary" onClick={displayData} >Details</button>
    }

    const ShowStudentDetails = () => {
        const { id, firstname, lastname, country, city, birthDate } = student;
        return (
            <>
            {showDetails &&
            <div className="card-body">
                <div className="card-header bg-info text-dark">
                    student info
                </div>
                <div className="card-body">
                    <h4 className=""
                </div>
            </div></>
        )
    }

    // functionconponent 

}