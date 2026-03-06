import { Task } from '../types/index';

interface TaskListProps {
  tasks: Task[];
  onTaskClick: (task: Task) => void;
  onTaskDelete: (task: Task) => void;
}

const TaskList = ({ tasks, onTaskClick, onTaskDelete }: TaskListProps) => {
  return    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id} className="task">
          <span className="task-title">{task.title}</span>
          <span
            className={`task-priority ${
              task.priority === 'low'
                ? 'low-priority'
                : task.priority === 'medium'
                ? 'medium-priority'
                : 'high-priority'
            }`}
          >
            {task.priority === 'low'
              ? 'Baixa'
              : task.priority === 'medium'
              ? 'Média'
              : 'Alta'}
          </span>
          <button onClick={() => onTaskClick(task)}>Editar</button>
          <button onClick={() => onTaskDelete(task)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;