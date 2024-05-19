import React from "react"
import Task from "./Task"

const Section = ({ sectionName, tasks, setTasks }) => {
  const working = tasks.filter((task) => task.isDone === false)
  const done = tasks.filter((task) => task.isDone === true)

  return (
    <section>
      <h2>{sectionName}</h2>
      <ul>
        {(sectionName === "working" ? working : done).map((task) => (
          <li key={task.id}>
            <Task task={task} tasks={tasks} setTasks={setTasks} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Section
