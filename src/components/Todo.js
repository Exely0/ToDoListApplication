import checkMark from "../todo-app-main/images/icon-check.svg"
import cross from "../todo-app-main/images/icon-cross.svg"

import { useState, useEffect } from "react";

function Todo({darkMode}) {

    const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("todoList")) || []);
    const [inputValue, setInputValue] = useState('');
    const [displayMode, setDisplayMode] = useState("all");

    const handleDisplayChange = (mode) => {
        setDisplayMode(mode)
    }

    useEffect(() => {
        const updatedTodoList = [...todoList]
        switch (displayMode) {
            case "all":
                console.log("all",todoList)
                
                for (const task of updatedTodoList) {
                    task.show = true
                } 
                break
            case "completed":
                console.log("completed",todoList)
                
                for (const task of updatedTodoList) {
                    if (task.done === true) {
                        task.show = true
                    }
                    else {
                        task.show = false
                    }
                } 
                break
            case "active":
                console.log("active",todoList)
                for (const task of updatedTodoList) {
                    if (task.done === false) {
                        task.show = true
                    }
                    else {
                        task.show = false
                    }
                } 
                break
            default:
                console.log("ce message n'apparaitra jamais")
                break
        }
        setTodoList(updatedTodoList);
    }, [displayMode]);
    
    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(todoList));
      }, [todoList]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleResetInput = () => {
        setInputValue('');
    };

    const handleSubmitNewTask = (e) => {
        handleResetInput()
        e.preventDefault();
        if (inputValue !== '') {
            setTodoList([...todoList, {value : inputValue, done : false, show : true}])
        }
    }

    const deleteAllTasks = () => {
        if (todoList.length !== 0) {
            const updatedTodoList = []
            setTodoList(updatedTodoList)
        }
    }

    const handleDeleteTask = (index) => {
        const updatedTodoList = todoList.filter((_, i) => i !== index);
        setTodoList(updatedTodoList);
    };

    const handleTaskDone = (index) => {
        const updatedTodoList = [...todoList]
        updatedTodoList[index].done = !updatedTodoList[index].done
        setTodoList(updatedTodoList);
    };

    return (
      <div className={` -translate-y-[80px] sm:-translate-y-[150px] transition-colors ${darkMode === true ? "!text-white" : ''}`}>
        <form className={` mb-10 w-[300px] sm:w-[500px] rounded-lg shadow-lg py-4 px-4 flex items-center gap-4 ${darkMode === true ? "bg-[#25273C]" : "bg-white"} `} onSubmit={handleSubmitNewTask}>
            <div className=" w-5 h-5 rounded-full border border-black"></div>
            <input className={`${darkMode === true ? "bg-[#25273C]" : "bg-white"} w-full border-none outline-none appearance-none`} type="text" value={inputValue } onChange={handleInputChange} placeholder="Create a new todo .."/>
            <button type="submit"></button>
        </form>

        <div className={` mb-[2px] flex items-center justify-between w-[300px] sm:w-[500px] rounded-t-lg shadow-lg py-4 px-4 gap-4 ${darkMode === true ? "bg-[#25273C]" : "bg-white"}`}>
            <div>Manage your tasks</div>
        </div>

        <div>
            {todoList.map((task, index) => (
                <div key={index} className={` ${task.show === true ? "flex" : "hidden"} transition-all justify-between items-center mb-[2px] w-[300px] sm:w-[500px] shadow-lg py-2 px-4 gap-4 ${darkMode === true ? "bg-[#25273C]" : "bg-white"}`}>
                <div onClick={() => handleTaskDone(index)} className={` transition-colors ${task.done === true ? "bg-gradient-to-r from-blue-400 to-blue-800" : ''} p-2 hover:cursor-pointer hover:border-blue-600 w-5 h-5 rounded-full border border-black object-cover`}>
                </div>
                <div  className={` ${task.done === true ? "line-through text-gray-400" : ''} grow`} key={index}>{task.value}</div>
                <div className=" p-2 hover:cursor-pointer" onClick={() => handleDeleteTask(index)}>
                    <img src={cross} alt="supprimer"/>
                </div>
                
                </div>
                
            ))}
        </div>

        <div className={` mb-10 flex items-center justify-between w-[300px] sm:w-[500px] rounded-b-lg shadow-lg py-4 px-4 gap-4 ${darkMode === true ? "bg-[#25273C]" : "bg-white"}`}>
            <div>{todoList.length} tasks</div>
            <div onClick={() => deleteAllTasks()} className=" text-slate-400 hover:cursor-pointer">Clear all</div>
        </div>

        <div className={` flex items-center justify-center w-[300px] sm:w-[500px] rounded-lg shadow-lg py-4 px-4 gap-4 ${darkMode === true ? "bg-[#25273C]" : "bg-white"}`}>
            <div onClick={() => handleDisplayChange("all")} className={` transition-colors ${displayMode === "all" ? "!text-blue-600" : ''} font-semibold hover:text-slate-500 hover:cursor-pointer`}>
                All
            </div>
            <div onClick={() => handleDisplayChange("active")} className={` transition-colors ${displayMode === "active" ? "!text-blue-600" : ''} font-semibold hover:text-slate-500 hover:cursor-pointer`}>
                Active
            </div>
            <div onClick={() => handleDisplayChange("completed")} className={` transition-colors ${displayMode === "completed" ? "!text-blue-600" : ''} font-semibold hover:text-slate-500 hover:cursor-pointer`}>
                Completed
            </div>
        </div>
      </div>
    );
  }
  
  export default Todo;