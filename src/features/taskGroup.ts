import { TaskGroup } from '../types';
import TaskList from './taskList';

 TaskGroupProps {
  group: TaskGroup;
  onTaskClick: (task: Task => void;
  onTaskDelete: (task: Task) => void;
}

const TaskGroupComponent = ({ group, onTaskClick, onTaskDelete }: TaskGroupProps) => {
  return (
    <div className="task-group">
      <h2 className="task-group-header">{group.title}</h2>
      <TaskList tasks={group.tasks} onTaskClick={onTaskClick} onTaskDelete={onTaskDelete} />
    </div>
  );
};

export default TaskGroupComponent;