import TimeAgo from "react-timeago";

const Todo = ({ setTodo, todoArray, todo, text, date }) => {
    const deleteHandler = () => {
      setTodo(todoArray.filter((item) => item.id !== todo.id));
    };
    const completeHandler = () => {
      setTodo(
        todoArray.map((item) => {
          if (item.id === todo.id) {
            return {
              ...item,
              completed: !item.completed,
            };
          }
          return item;
        })
      );
    };
    return (
      <div className="flex rounded bg-indigo-200 p-3 w-3/4 h-20 items-center justify-around mt-2">
        <li className={`w-2/4 font-mono ${todo.completed ? "completed" : ""}`}>
          {text}
        </li>
        <button
          className="bg-green-400 w-2/12 m-2 rounded-md"
          onClick={completeHandler}
        >
          <i className="fa fa-check-circle-o" aria-hidden="true"></i>
        </button>
        <button className="bg-red-400 w-2/12 m-2 rounded-md" onClick={deleteHandler}>
          <i className="fa fa-trash-o" aria-hidden="true"></i>
        </button>
        <TimeAgo date={date} className="w-1/4 text-xs opacity-50 italic font-mono" />
      </div>
    );
  };

export default Todo;