type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type Props = {
  todo: Todo;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
};
import { Trash } from 'lucide-react'
function TodoItem({ todo, onDelete, onToggle }: Props) {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />

        <span className={todo.completed ? "line-through text-gray-400" : ""}>
          {todo.text}
        </span>
      </div>

      <button
        onClick={() => onDelete(todo.id)}
        className="rounded-full bg-gray-100 px-3 py-2 text-red-500"
      >
        <Trash size={19}/>
      </button>

    </div>
  );
}

export default TodoItem;
