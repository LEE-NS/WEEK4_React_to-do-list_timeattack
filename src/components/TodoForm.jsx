import React, { useState } from "react"

const TodoForm = ({ tasks, setTasks }) => {
  const [title, setTitle] = useState("")
  const [job, setJob] = useState("")

  const onChangeHandler = (setText) => {
    setText(event.target.value)
  }

  const addTask = (e) => {
    e.preventDefault()
    if (!title.trim() || !job.trim()) {
      return alert("제목과 내용을 모두 입력하십시오")
    }
    const newTask = {
      id: crypto.randomUUID(),
      title,
      job,
      isDone: false,
    }
    setTasks([...tasks, newTask])
    setTitle("")
    setJob("")
  }

  return (
    <form onSubmit={addTask}>
      <div>
        <p>제목</p>
        <input
          type="text"
          value={title}
          onChange={() => onChangeHandler(setTitle)}
        />
      </div>
      <div>
        <p>내용</p>
        <input
          type="text"
          value={job}
          onChange={() => onChangeHandler(setJob)}
        />
      </div>
      <button>추가</button>
    </form>
  )
}

export default TodoForm
