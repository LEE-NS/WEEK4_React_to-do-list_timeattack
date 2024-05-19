import React from "react"

const Task = ({ task, tasks, setTasks }) => {
  const { id, title, job, isDone } = task
  const removeTask = (id) => {
    const newTasks = tasks.filter((eachTask) => eachTask.id !== id)
    setTasks(newTasks)
  }
  const updateTask = (id) => {
    const updatedTasks = tasks.map((eachTask) =>
      eachTask.id === id ? { ...eachTask, isDone: !isDone } : eachTask
    )
    setTasks(updatedTasks)
  }

  return (
    <div>
      <p>{title}</p>
      <p>{job}</p>
      <div>
        <button onClick={() => updateTask(id)}>
          {isDone ? "취소" : "완료"}
        </button>
        <button onClick={() => removeTask(id)}>삭제</button>
      </div>
    </div>
  )
}

export default Task
