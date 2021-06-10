import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Comprar leche',
      day: 'Today',
      reminder: true,
    },
    {
      id: 2,
      text: 'Comprar Tesla',
      day: 'in the Future ...',
      reminder: true,
    }
  ])

  //Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  //Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? {
          ...task, reminder:
            !task.reminder
        } : task
      )
    )
  }

  return (
    <div className='container'>
      <Header title="Task tracker" />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ?
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
        />
        : 'No tasks have been created'}
    </div>
  );
}

export default App;
