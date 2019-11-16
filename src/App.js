import React, { useState }  from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function App() {
  const [todo, setTodo] = useState({desc: '', date: ''});
  const [todos, setTodos] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }

  const deleteItem = (event) => {
    event.preventDefault();
    setTodos(todos.filter((item, index) => parseInt(event.target.id) !== index))
  }

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  } 

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            The TodoList by Aleksanteri
          </Typography>
        </Toolbar>
      </AppBar>

        <TextField style={{marginRight: 20, marginBottom: 20, marginTop: 20}} type="date" name="date" value={todo.date} onChange={inputChanged}/>
        <TextField style={{marginRight: 20, marginBottom: 20, marginTop: 20}} placeholder="Description" name="desc" value={todo.desc} onChange={inputChanged}/>
        <Button size="small" style={{marginTop: 20}} variant="contained" color="primary" onClick={addTodo}>Add</Button>

      <TodoTable todos={todos} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
