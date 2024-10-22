import "./App.css";
import { task } from "../components/list";
import Form from "../components/form";
const itemsList = task.map((zadanie) => (
  <>
    <li key={zadanie.id}>{zadanie.id + ". " + zadanie.name}</li>
  </>
));
function App() {
  return (
    <>
      <h1>Lista rzeczy do zrobienia</h1>
      <Form></Form>
    </>
  );
}

export default App;
