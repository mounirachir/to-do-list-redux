import React, { useState, useEffect } from "react";
import { addTask, filterTask, updateTask } from "../redux/actions/taskAction";
import { useDispatch, useSelector } from "react-redux";
const AddTask = () => {
  const [task, setTask] = useState("");
  const current = useSelector((state) => state.taskReducer.current);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    if (!current) {
      const newTask = {
        id: Date.now(),
        description: task,
        isDone: false,
      };
      dispatch(addTask(newTask));
      setTask("");
    } else {
      dispatch(
        updateTask({
          id: current.id,
          description: task,
          isDone: current.isDone,
        })
      );
    }
  };
  const handleRadioClick = (e) => {
    dispatch(filterTask(e.target.id));
  };
  useEffect(() => {
    if (current) {
      setTask(current.description);
    }
  }, [current]);
  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleClick}>{!current ? "Add" : "update"}</button>
      <label htmlFor="complete">complete</label>
      <input
        type="radio"
        name="done"
        id="complete"
        onClick={handleRadioClick}
      />
      <label htmlFor="incomplete">incomplete</label>
      <input
        type="radio"
        name="done"
        id="incomplete"
        onClick={handleRadioClick}
      />
      <label htmlFor="all">all</label>
      <input type="radio" name="done" id="all" onClick={handleRadioClick} />
    </div>
  );
};

export default AddTask;
