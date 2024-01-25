import { useState, useEffect } from 'react';
import {Link}  from "react-router-dom";
import '../App.css'
// import { EditableText } from "@blueprintjs/core";

const ListTeacher = () => {    
    const [teachers, setTeachers] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:2024/api/profesor');
                const data = await response.json();   
                setTeachers(data); 
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);
    
    // const onChangeHandler = (id, key, value) => {
    //     setTeachers(values => {
    //         return values.map(item =>
    //             item.id === id ? { ...item, [key]: value } : item
    //         )
    //     })
    // };

    return (
        <div className="list-teacher">
            <table className="table-auto border-separate border-spacing-4 border">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Add Question</th>
                    </tr>
                </thead>
                <tbody>
                    {teachers.map((teacher) => (
                        <tr key={teacher._id}>
                            <td>{teacher._id}</td>
                            <td>
                                {/* <EditableText
                                    multiline={false}
                                    placeholder="Enter name"
                                    value={teacher.name}
                                    onChange={(value) => onChangeHandler(teacher.id, 'name', value)}
                                /> */}{teacher.name}
                            </td>
                            <td>
                                {/* <EditableText
                                    multiline={false}
                                    placeholder="Enter age"
                                    value={teacher.apellido}
                                    onChange={(value) => onChangeHandler(teacher.id, 'age', value)}
                                /> */}{teacher.apellido}
                            </td>
                            <td className='flex items-center justify-center'>
                                <Link to={`/preguntas/${teacher._id}`}>📑</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListTeacher;
