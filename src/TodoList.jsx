import { useEffect, useState } from "react"
import IconButton from '@mui/material/IconButton';
import DeleteIcon from "@mui/icons-material/Delete";
export default function TodoList() {

    const [todoList, setTodolist] = useState([]);
    const [task, setTask] = useState();
    const [isButtonVisible, setIsButtonVisible] = useState(true)

    useEffect(() => {
        document.getElementById("task").style.display = "none";
    }, [])


    function handleAddTodolist() {
        document.getElementById("addTask").value = "";
        document.getElementById("task").style.display = "none";
        setIsButtonVisible(true);
        const newTask = task;
        setTodolist([...todoList, newTask]);
    }

    function handleRemoveTodolist(index) {
        setTodolist(todoList.filter((_, i) => i !== index));
    }

    function handleTaskChange(e) {
        setTask(e.target.value);
    }

    function openForm() {
        document.getElementById("task").style.display = "block";
    }

    function hideButton() {
        setIsButtonVisible(false);
    }

    return (
        <div className="content-container">
            <div className="header">
                <h2>Website Todo</h2>
            </div>
            <div className="opacity">

            </div>
            <div className="content">
                <ul>
                    {todoList.map((todoList, index) =>
                        <li key={index} >
                            <div>
                                <input type="checkbox" />
                                {todoList}
                            </div>
                            <IconButton aria-label="delete" size="small" onClick={() => handleRemoveTodolist(index)}>
                                <DeleteIcon fontSize="inherit" />
                            </IconButton>

                        </li>
                    )}
                </ul>

                <div className="contain-btn-open">
                    {isButtonVisible && <button className="open-btn" onClick={() => {
                        hideButton();
                        openForm();
                    }}>Add Task</button>}
                </div>


                <br />

                <div id="task">
                    <input type="text" onChange={handleTaskChange} placeholder="Add Task" id="addTask" />
                    <button onClick={handleAddTodolist}>Add</button>
                </div>

            </div>

        </div>
    )
}
