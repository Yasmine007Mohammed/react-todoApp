import React ,{ useState } from "react";
function TodoApp ({addTodo}){
    const [input, setInput] = useState("")

    const handleSubmit = e =>{
        e.preventDefault();
        if(!input) return
        addTodo(input)
        setInput("")
    }
    return(
        <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
                <input className="form-control" type="text" value={input} placeholder="enter new input"
                required onChange={e => setInput(e.target.value)}
                />
                <div className="input-groub-append">
                    <button className="btn btn-outline-primary" type="submit">Add</button>
                </div>
            </div>
        </form>
    )
}
    function TodoList(){
        const[lists, setLists] = useState([])
    
        /// functions
        //add
        const addTodo = item =>{
            const newTodo = [...lists, {item}]
            setLists(newTodo)
        }
        // done
        const doneTodo = index =>{
            const newTodo = [...lists]
            newTodo[index].isCompleted = true
            setLists(newTodo)
        }
        // remove
        const removeTodo = index =>{
            const newTodo = [...lists]
            newTodo.splice(index,1)
            setLists(newTodo)
        }
    
        return(
            <div className="container">
                <TodoApp addTodo={addTodo} />
                <ul className="list-group">
                    {lists.map((list,index) => {
                        return(
                        <li className="list-group-item d-flex justify-content-between align-items-center"
                        key={index}
                        style={{textDecoration: list.isCompleted ? "line-through" : ""}}
                        >
                        {list.item}
                        <div>
                            <button className="btn-btn-primary btn-sm"
                                onClick={() => doneTodo(index)}
                            > Done</button>
                            <button className="btn-btn-primary btn-sm"
                            onClick={() => removeTodo(index)}
                            >
                                Remove
                            </button>
                        </div>
                        </li>
                        )
                    })}
                </ul>
            </div>
        )
    }

export {TodoList, TodoApp} 


