import { useState } from 'react';
import '../App.css'

const AddTeacher = () => {
    const [name, setName] = useState('');
    const [apellido, setApellido] = useState('');

    const handleSubmit = async () => {
        try {
            const body = { name, apellido };
            fetch('http://localhost:2024/api/profesor', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });
            window.location = '/';
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <div >
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col items-center justify-center">
                    <input
                        className="border-2 border-black m-2 rounded-lg"
                        type="text"
                        placeholder="First Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        className="border-2 border-black m-2 rounded-lg"
                        type="text"
                        placeholder="Last Name"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                    />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add Teacher
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddTeacher;