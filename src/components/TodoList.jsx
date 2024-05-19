import React from "react"
import TodoItem from "./TodoItem"

const TodoList = ({ sectionName, tasks, setTasks }) => {
  const working = tasks.filter((task) => task.isDone === false)
  const done = tasks.filter((task) => task.isDone === true)

  return (
    <section>
      <h2>{sectionName}</h2>
      <ul>
        {(sectionName === "working" ? working : done).map((task) => (
          <li key={task.id}>
            <TodoItem task={task} tasks={tasks} setTasks={setTasks} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default TodoList
