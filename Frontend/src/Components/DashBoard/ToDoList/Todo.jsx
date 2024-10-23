import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
function Todo() {

  window.oncontextmenu = function() {
    return false;
  };

  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);
  const [showFinished, setshowFinished] = useState(false);

  useEffect(() => {
    const todosFromStorage = localStorage.getItem("todos");
    if (todosFromStorage) {
      settodos(JSON.parse(todosFromStorage));
    }
  }, []);

  const updateTodos = (newTodos) => {
    settodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const handleAdd = () => {
    if (todo !== "") {
      const newTodos = [...todos, { todo, id: uuidv4(), isCompleted: false }];
      updateTodos(newTodos);
      settodo("");  // Clear the input after adding
    }
  };

  const handleEdit = (e, id) => { 
    let t = todos.find(i => i.id === id); 
    settodo(t.todo);
    
    let newTodos = todos.filter(item => item.id !== id);
    updateTodos(newTodos);
  };

  const handleDelete = (e) => {
    let id = e.target.name;  
    const newTodos = todos.filter(todo => todo.id !== id);
    updateTodos(newTodos);
  };

  const handleChange = (e) => {
    let value = e.target.value;
    settodo(value);
  };

  const handleCheckbox = (e) => { 
    let id = e.target.name;  
    let index = todos.findIndex(item => item.id === id);
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    updateTodos(newTodos);
  };

  const handleShowFinished = () => {
    setshowFinished(!showFinished);
  };

  const filteredTodos = showFinished ? todos.filter(todo => todo.isCompleted) : todos;

  return (
    <>
      <div className='h-[400px] w-[380px] bg-[#e2dfef] flex items-center justify-center rounded-2xl mr-4'>
        <div id="container" className='h-[100%] w-[100%] bg-[rgb(194, 107, 255)] p-3 flex flex-col item-center rounded-2xl'>
       
          <h3 className='text-1xl font-extrabold my-2'>Add Your Today Task </h3>
          <div id="input-box" className='flex items-center gap-1 mb-1'>
            <input
              onChange={handleChange}
              id="custom-input"
              type="text"
              value={todo}
              placeholder="Enter a task"
              className="border w-[80%] h-8 p-1 rounded-xl border-gray-300 focus:border-blue-500 inline-block focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <div onClick={handleAdd} id="save-button" className='text-white px-3 py-1.5 rounded-2xl bg-blue-600 w-[80px] h-fit text-sm flex items-center justify-center hover:bg-blue-800'> Save</div>
          </div>
          <div className='flex gap-2 text-sm items-center'>
            <input onChange={handleShowFinished} checked={showFinished} type="checkbox" className='flex items-center' />
            <div id="show-finisher-button" className='flex items-center'> show Finished</div>
          </div>
          <div id="line" className=' my-3 h-[1px] bg-neutral-500'></div>
          <div id="task-container" className='h-full w-full px-1 overflow-y-scroll'>
            <h1 className='font-bold text-xl'>Your Todos</h1>
            <div id='task-box'>
              {filteredTodos.map((item, index) => {
                return (
                  <div key={item.id} id="todo " className='flex items-center justify-between my-2'>
                    <div className='flex gap-3'>
                      <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} />
                      <div id="text" className={item.isCompleted ? 'line-through' : ''}>{item.todo}</div>
                    </div>
                    <div id="buttons" className='flex text-xs gap-3'>
                      <button onClick={(e) => handleEdit(e, item.id)} className='text-white px-1 py-1 rounded-2xl bg-blue-600 w-[40px] h-fit flex items-center justify-center hover:bg-blue-800'><FaEdit /></button>
                      <button name={item.id} onClick={handleDelete} className='text-white px-1 py-1 rounded-2xl bg-blue-600 w-[40px] h-fit flex items-center justify-center hover:bg-blue-800'><MdDelete /></button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
