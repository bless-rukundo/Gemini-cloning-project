import { useState } from "react";
import TodoItem from "../src/assets/components/TodoItem";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;

    const newTodo: Todo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInput("");
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-16 text-center text-6xl font-bold text-gray-200">
          todos
        </h1>
        <div className="mb-8 flex rounded-full border px-5 py-3 shadow-md">

          <input
            type="text"
            placeholder="Add todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTodo()}
            className="flex-1 outline-none"
          />

          <button
            onClick={addTodo}
            className="bg-green-500 text-white px-2 rounded-full"
          >
            +
          </button>

        </div>

        <div>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={deleteTodo}
              onToggle={toggleTodo}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;
