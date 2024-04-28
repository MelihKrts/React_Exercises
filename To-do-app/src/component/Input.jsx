import React, { useState } from 'react';
import { useEffect } from 'react';

export default function Input() {
    const [tasks, setTasks] = useState([]);
    const [taskName, setTaskName] = useState('');
    const [date, setDate] = useState('');
    const [editIndex, setEditIndex] = useState(null)

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        console.log('Stored tasks:', storedTasks);
        setTasks(storedTasks);
    }, []);


    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleChange = (e) => {
        setTaskName(e.target.value);
    };

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const addTask = () => {
        if (taskName.trim() !== "" && date.trim() !== "") {
            const capitalize = taskName.charAt(0).toUpperCase() + taskName.slice(1);
            const newTask = { name: capitalize, date: date };
            if (editIndex !== null) {
                const updatedTasks = [...tasks]
                updatedTasks[editIndex] = newTask
                setTasks(updatedTasks)
                setEditIndex(null)
            }
            else {

                setTasks([...tasks, newTask]);
            }
            setTaskName('');
            setDate('');
        }
    };

    const edit = (index) => {
        setTaskName(tasks[index].name)
        setDate(tasks[index].date)
        setEditIndex(index)
    }

    const deleteTask = (index) => {
        const udpatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(udpatedTasks)
        setEditIndex(null)
    }


    return (
        <div>
            <input
                type='text'
                value={taskName}
                onChange={handleChange}
                required
                placeholder='Enter a text'
            />
            <input
                type='date'
                value={date}
                onChange={handleDateChange}
                required
            />
            <button onClick={addTask}>Add Task</button>
            {tasks.map((task, index) => (
                <p key={index}>
                    <b>Name</b>: {task.name}, &nbsp; <b>Date</b>: {task.date}
                    <button onClick={() => edit(index)}>Edit</button>
                    <button onClick={() => deleteTask(index)}>Delete</button>
                </p>

            ))}
        </div>
    );
}

// import React, { useState, useEffect } from 'react';

// export default function Input() {
//     const [tasks, setTasks] = useState([]);
//     const [taskName, setTaskName] = useState('');
//     const [date, setDate] = useState('');
//     const [editIndex, setEditIndex] = useState(null);

//     useEffect(() => {
//         const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
//         console.log('localStorage tasks:', storedTasks);
//         setTasks(storedTasks);
//     }, []);

//     useEffect(() => {
//         localStorage.setItem('tasks', JSON.stringify(tasks));
//     }, [tasks]);

//     const handleChange = (e) => {
//         setTaskName(e.target.value);
//     };

//     const handleDateChange = (e) => {
//         setDate(e.target.value);
//     };

//     const addTask = () => {
//         if (taskName.trim() !== "" && date.trim() !== "") {
//             const capitalize = taskName.charAt(0).toUpperCase() + taskName.slice(1);
//             const newTask = { name: capitalize, date: date };
//             if (editIndex !== null) {
//                 const updatedTasks = [...tasks]
//                 updatedTasks[editIndex] = newTask
//                 setTasks(updatedTasks)
//                 setEditIndex(null)
//             }
//             else {
//                 setTasks([...tasks, newTask]);
//             }
//             setTaskName('');
//             setDate('');
//         }
//     };

//     const edit = (index) => {
//         setTaskName(tasks[index].name)
//         setDate(tasks[index].date)
//         setEditIndex(index)
//     }

//     const deleteTask = (index) => {
//         const udpatedTasks = tasks.filter((_, i) => i !== index)
//         setTasks(udpatedTasks)
//         setEditIndex(null)
//     }

//     return (
//         <div>
//             <input
//                 type='text'
//                 value={taskName}
//                 onChange={handleChange}
//                 required
//                 placeholder='Enter a text'
//             />
//             <input
//                 type='date'
//                 value={date}
//                 onChange={handleDateChange}
//                 required
//             />
//             <button onClick={addTask}>Add Task</button>
//             {tasks.map((task, index) => (
//                 <p key={index}>
//                     <b>Name</b>: {task.name}, &nbsp; <b>Date</b>: {task.date}
//                     <button onClick={() => edit(index)}>Edit</button>
//                     <button onClick={() => deleteTask(index)}>Delete</button>
//                 </p>
//             ))}
//         </div>
//     );
// }

// import React, { useState, useEffect } from 'react';

// export default function Input() {
//     const [tasks, setTasks] = useState([]);
//     const [taskName, setTaskName] = useState('');
//     const [date, setDate] = useState('');
//     const [editIndex, setEditIndex] = useState(null);

//     useEffect(() => {
//         const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
//         setTasks(storedTasks);
//     }, []);


//     useEffect(() => {
//         localStorage.setItem('tasks', JSON.stringify(tasks));
//     }, [tasks]);

//     const handleChange = (e) => {
//         setTaskName(e.target.value);
//     };

//     const handleDateChange = (e) => {
//         setDate(e.target.value);
//     };

//     const addTask = () => {
//         if (taskName.trim() !== "" && date.trim() !== "") {
//             const capitalize = taskName.charAt(0).toUpperCase() + taskName.slice(1);
//             const newTask = { name: capitalize, date: date };
//             if (editIndex !== null) {
//                 const updatedTasks = [...tasks]
//                 updatedTasks[editIndex] = newTask
//                 setTasks(updatedTasks)
//                 setEditIndex(null)
//             }
//             else {
//                 setTasks([...tasks, newTask]);
//             }
//             setTaskName('');
//             setDate('');
//             localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
//         }
//     };

//     const edit = (index) => {
//         setTaskName(tasks[index].name)
//         setDate(tasks[index].date)
//         setEditIndex(index)
//     }

//     const deleteTask = (index) => {
//         const udpatedTasks = tasks.filter((_, i) => i !== index)
//         setTasks(udpatedTasks)
//         setEditIndex(null)
//     }

//     return (
//         <div>
//             <input
//                 type='text'
//                 value={taskName}
//                 onChange={handleChange}
//                 required
//                 placeholder='Enter a text'
//             />
//             <input
//                 type='date'
//                 value={date}
//                 onChange={handleDateChange}
//                 required
//             />
//             <button onClick={addTask}>Add Task</button>
//             {tasks.map((task, index) => (
//                 <p key={index}>
//                     <b>Name</b>: {task.name}, &nbsp; <b>Date</b>: {task.date}
//                     <button onClick={() => edit(index)}>Edit</button>
//                     <button onClick={() => deleteTask(index)}>Delete</button>
//                 </p>
//             ))}
//         </div>
//     );
// }
