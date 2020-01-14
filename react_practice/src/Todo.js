import React from 'react'

export default function Todo({todo,toggleTodo}) {
   function handleToggleClick() {
       toggleTodo(todo.id)
   }
    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.complete} onChange={handleToggleClick} />
                {todo.name}
            </label>
        </div>
    )
}
