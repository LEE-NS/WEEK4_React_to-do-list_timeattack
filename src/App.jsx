import { useState } from "react"
import Form from "./components/Form"
import Section from "./components/Section"
import "./App.css"

function App() {
  const [tasks, setTasks] = useState([])

  return (
    <>
      <h1>to-do list</h1>
      <Form tasks={tasks} setTasks={setTasks} />
      <Section sectionName="working" tasks={tasks} setTasks={setTasks} />
      <Section sectionName="done" tasks={tasks} setTasks={setTasks} />
    </>
  )
}

export default App
