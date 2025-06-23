import { useForm } from 'react-hook-form'
import { useTaskStore } from '../store/useTaskStore'

type FormValues = {
  title: string
}

const Tasks = () => {
  const { register, handleSubmit, reset } = useForm<FormValues>()
  const { tasks, addTask, toggleTask, deleteTask } = useTaskStore()

  const onSubmit = (data: FormValues) => {
    const trimmedTitle = data.title.trim()
    if (trimmedTitle.length === 0) {
      alert('Lütfen bir görev başlığı girin.')
      return
    }

    addTask(trimmedTitle)
    reset()
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h2 style={{ color: '#d53f8c' }}>Notlarım / Görevlerim</h2>

      <form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: '1rem' }}>
        <input
          {...register('title', { required: true })}
          placeholder="Yeni not / görev..."
          style={{ marginRight: '0.5rem' }}
        />
        <button type="submit">Ekle</button>
      </form>

      <ul>
        {[...tasks]
          .sort((a, b) => Number(a.completed) - Number(b.completed))
          .map((task) => (
            <li key={task.id} style={{ marginBottom: '0.5rem' }}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              <span
                style={{
                  textDecoration: task.completed ? 'line-through' : 'none',
                  marginLeft: '0.5rem',
                }}
              >
                {task.title}
              </span>
              <button onClick={() => deleteTask(task.id)} style={{ marginLeft: '1rem' }}>
                Sil
              </button>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Tasks
