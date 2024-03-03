import { useEffect, useState } from "react";
import { retrieveAllTodosForUsernameApi, deleteTodoApi } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import { useNavigate } from "react-router-dom";

function ListTodoComponent() {

    const authContext = useAuth();
    const navigate = useNavigate();

    const [todos, setTodos] = useState([]);
    const [message, setMessage] = useState(null);

    useEffect(() => refreshTodos(), [])

    const refreshTodos = () => {
        retrieveAllTodosForUsernameApi(authContext.username)
            .then(response => setTodos(response.data))
            .catch(error => console.log(error))
    }

    const deleteTodo = (id) => {
        console.log(`clicked ${id}`)
        deleteTodoApi(authContext.username, id)
            .then(() => {
                setMessage(`Delete of todo with id = ${id} successful`)
                refreshTodos()
            })
            .catch(error => console.log(error))
    }

    const UpdateTodo = (id) => {
        console.log(`clicked ${id}`)
        navigate(`/todos/${id}`)
    }

    return (
        <div className="container">
            <h1>Things You Want To Do!</h1>
            {message && <div className="alert alert-warning">{message}</div>}
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>is done?</th>
                            <th>Target Date</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map(todo => (
                            <tr key={todo.id}>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                {/* <td>{todo.targetDate.toDateString()}</td> */}
                                <td>{todo.targetDate.toString()}</td>
                                <td><button className="btn btn-warning" onClick={() => deleteTodo(todo.id)}>Delete</button></td>
                                <td><button className="btn btn-success" onClick={() => UpdateTodo(todo.id)}>Update</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListTodoComponent;