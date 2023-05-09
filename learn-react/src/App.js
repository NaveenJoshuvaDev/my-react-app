import React, {useState, useEffect} from 'react';
import './App.css';
let globalID=0;
function App() {
  const [task, setTask] = useState("")
  const [todos, setTodos] = useState([])
  function createTodo(event) {
   //console.log(`Task Value: ${task}`);
   event.preventDefault()
   setTodos(oldTodos => {
    setTask("")
    return [...oldTodos, {todo: task, id: globalID++}]
   })
  }
  // function tryToCheck(e) {
  //   if(e.keyCode=== 13) {
  //     createTodo()
  //   }
  // }
  function deleteitem(itemID) {
   setTodos(oldTodos => oldTodos.filter(item=>item.id !== itemID))
  }
  return (
    <div className="App">
     <h1>Best todo App Ever</h1>
     <form onSubmit={createTodo}>
         <input  type="text" value={task} onChange={event => {
            setTask(event.target.value)
          }}/>
          <button type="submit" onClick={createTodo}>Create Todo</button>
    </form>
     <ul>
     {todos.map((item, index) =>{
      return <div  key={item.id}><li>{item.todo}({item.id})</li>
      <button onClick={() => deleteitem(item.id)}>Delete</button>
      </div>
     })

     }
     </ul>
    </div>
  );
}

export default App;
