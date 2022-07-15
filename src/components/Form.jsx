import Swal from "sweetalert2";

const Form = ({ inputText, setInputText, setTodo, todo }) => {
    const handlerInput = (event) => {
      setInputText(event.target.value);
    };
    const handlerTodo = (event) => {
      event.preventDefault();
      if (inputText === "") {
        Swal.fire("Hey!", "Must have a task!", "error");
      } else {
        setTodo([
          ...todo,
          {
            text: inputText,
            completed: false,
            id: Math.floor(Math.random() * 1000),
            date: new Date(),
          },
        ]);
      }
      setInputText("");
    };
    return (
      <form className="flex justify-center items-center">
        <input
          type="text"
          id="task"
          className="bg-indigo-200 rounded-lg p-2 w-2/4 font-mono"
          placeholder="Set your task..."
          onChange={handlerInput}
          value={inputText}
        />
        <button
          className="bg-indigo-500 text-indigo-900 w-1/6 h-10 rounded-md ml-2 font-bold font-mono"
          onClick={(event) => handlerTodo(event)}
        >
          Send
        </button>
      </form>
    );
  };

export default Form;