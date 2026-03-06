interface Task {
  id: number;
  title: string;
  priority: 'low' | 'medium' | 'high';
  done: boolean;
}

interface TaskGroup {
  title: string;
  tasks: Task[];
}