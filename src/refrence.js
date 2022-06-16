import React, { useEffect, useState } from 'react';

export default function Student() {

    const [expense_id, setExp_id] = useState('')
    const [expense_date, setExp_date] = useState('')
    const [description, setDes] = useState('')
    const [location, setLoc] = useState('')
    const [category_id, setCat_id] = useState('')
    const [students, setStudents] = useState([])


    const handleClick = (e) => {
        e.preventDefault()
        const student = { expense_id, expense_date, description, location, category_id }
        console.log(student)
        fetch("http://localhost:8080/Expense_Dtls", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(student)

        }).then(() => {
            console.log("New Expense added")
        })
    }

    useEffect(() => {
        fetch("http://localhost:8080/usr")
            .then(res => res.json())
            .then((result) => {
                setStudents(result);
            }
            )
    }, [])
    return (

        <>

            <h1 style={{ color: "blue" }}><u>Add Student</u></h1>
            <h1 style={{ color: "blue" }}><u>Add New Student</u></h1>
            <div className="form">
                <form >
                    <div className="input-container">
                        <label><h3>Expense ID :-
                            <input type="number" name="ex_id" placeholder="Enter the Expense ID" value={expense_id}
                                onChange={(e) => setExp_id(e.target.value)} required /></h3></label>
                    </div>
                    <div className="input-container">
                        <label><h3>Expense Date :-
                            <input type="date" name="ex_date" placeholder="Enter the Expense Date" value={expense_date}
                                onChange={(e) => setExp_date(e.target.value)} required /></h3></label>
                    </div>
                    <div className="input-container">
                        <label><h3>Description :-
                            <input type="text" name="desc" placeholder="Enter the Description" value={description}
                                onChange={(e) => setDes(e.target.value)} required /></h3></label>
                    </div>
                    <div className="input-container">
                        <label><h3>Location :-
                            <input type="text" name="loc" placeholder="Enter the Location" value={location}
                                onChange={(e) => setLoc(e.target.value)} required /></h3></label>
                    </div>
                    <div className="input-container">
                        <label><h3>Category :-
                            <input type="number" name="cat" placeholder="Enter the Category ID" value={category_id}
                                onChange={(e) => setCat_id(e.target.value)} required /></h3></label>
                    </div>
                    <button variant="contained" color="secondary" onClick={handleClick}>
                        Submit
                    </button>
                </form>
            </div>
            <h1>Students</h1>



            {students.map(student => (
                <form key={student.id}>
                    Id: {student.id}<br />
                    Expense Id:{student.expense_id}<br />
                    Expense Date:{student.expense_date}<br />
                    Expense Description:{student.description}<br />
                    Expense Location:{student.location}<br />
                    Category Id:{student.category_id}


                </form>
            ))
            }






        </>
    );
}
