import reactDom from 'react-dom';
import './App.css'
import {useState} from 'react'
function App() {
  const [todos,setdos]=useState([])
  const [word,setword]=useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={word} onChange={(e)=>setword(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setdos([...todos,{text:word,status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        { todos.map((value)=>{
          return(
             <div className="todo">
             <div className="left">
               <input value={value.status} type="checkbox" name="" id="" />
               <p>{value.text}</p>
             </div>
             <div className="right">
               <i className="fas fa-times"></i>
             </div>
             </div>
                )

        })
         
        }
        
      </div>
    </div>
    
  ); 
}

export default App;
