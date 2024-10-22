import { useState, useTransition } from "react";
import { task } from "./list";
import "./Form.css";
export default function Form() {
  const [name, setName] = useState("");
  const [tasks, setTasks] = useState(task);
  let nextId = tasks.length + 1;
  return (
    <>
      <h2>Dodaj zadanie poniżej!</h2>
      <input
        className="input"
        placeholder="Wpisz zadanie do zrobienia"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <br></br>
      <button
        className="save"
        onClick={() => {
          setTasks([...tasks, { id: nextId++, name }]);
          setName("");
        }}
      >
        Dodaj!
      </button>
      <ul>
        {tasks.map((rzecz) => (
          <>
            <li key={rzecz.id}>
              {rzecz.name}
              <button
                onClick={() => {
                  setTasks(tasks.filter((a) => a.id !== rzecz.id));
                }}
              >
                Usuń
              </button>
            </li>
          </>
        ))}
      </ul>
    </>
  );
}
