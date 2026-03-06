import React, { useState, useEffect } from 'react';
import './styles/theme.css';
import TaskGroupComponent from './features/taskGroup';

interface Task {
  id: number;
  title: string;
  priority: 'low' | 'medium' | 'high';
  done: boolean;
}

interface TaskGroup  title: string;
  tasks: Task[];
}

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskGroups, setTaskGroups] = useState<TaskGroup[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskPriority, setNewTaskPriority] = useState('low');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
     Tasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  },tasks]);

  const handleTaskClick = (task: Task) => {
    const updatedTasks = tasks.map((t) => (t.id === task.id ? { ...t, done: !t.done } : t));
    setTasks(updatedTasks);
  };

  const handleTaskDelete = (task: Task) => {
    const updatedTasks = tasks.filter((t) => t !== task.id);
    setTasks(updatedTasks);
  };

  const handleAddTask = () => {
    const newTask: Task = {
      id: tasks.length + 1,
      title: newTaskTitle,
      priority: newTaskPriority,
      done: false,
    };
    setTasks([...tasks, newTask]);
    setNewTaskTitle('');
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const taskGroups: TaskGroup[] = [
    {
      title: 'Por fazer',
      tasks: filteredTasks.filter((task) => !task.done),
    },
    {
      title: 'Feito',
      tasks: filteredTasks((task) => task.done),
    },
  ];

  return (
    <div>
      <h1>Gestor de Tarefas</h1>
     input
        typetext"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
        placeholder="Nova tarefa"
      />
      <select value={newTaskPriority} onChange={(e) => setNewTaskPriority(e.target.value)}>
        <option value="low">Baixa</option>
        <option value="medium">Média</option>
        <option value="high">Alta</option>
      </select>
 <button onClick={handleAddTask}>Adicionar</button>
      <input
        type="text"
        valuesearchQuery}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Pesquisar"
      />
      {taskGroups.map((group) => (
        <TaskGroupComponent
          key={group.title}
          group={group}
          onTaskClick={handleTaskClick}
          onTaskDelete={handleTaskDelete}
        />
      ))}
    </div>
  );
};

export default App;