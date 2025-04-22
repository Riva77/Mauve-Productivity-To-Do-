// import Button from '../components/buttons/Button'

import { useState } from "react";
import Button from "../components/buttons/Button"
import Card from "../components/cards/Card"
import './Display.css'
import { useNavigate } from "react-router-dom";

const Display = () => {
  const navigate = useNavigate();
  

  const today= new Date();
  const day=today.toLocaleString('en-US', { weekday: 'long' })
  const date= today.getDate();
  const month=today.toLocaleString('en-US', { month: 'long' })

  
  const [tasks, setTasks] = useState<{ text: string, done: boolean }[]>([])
  const [current, setCurrent]= useState<string>('')
  
  const addTask = (e?: React.MouseEvent<HTMLButtonElement>) => {
    e?.preventDefault();
    if (current.trim()) {
      setTasks((t) => [...t,{ text: current.trim(), done: false }]);
      setCurrent('');
    }
  };

  const toggleTaskDone = (index: number) => {
    setTasks((prev) =>
      prev.map((task, i) =>
        i === index ? { ...task, done: !task.done } : task
      )
    );
  };


  const completedPercent = tasks.length > 0
  ? (tasks.filter(task => task.done).length / tasks.length) * 100
  : 0;
  
  
  return (
    <div className='main'>
    <div className="display-div container">
      <div className="upper-div">

      <div className="left-div">
      <Card 
    style={{height: "160px",
    width: "160px",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    
    
    }}>
     <div className="day">{day}</div>
     <div className="date">{date}</div>
     <div className="month"> {month}</div>
    
    </Card>
      </div>
    

    <div className="right-div">
    <Card
    style={{height: "85px",
    width: "278px",
    display:"flex",
    justifyContent:"center",
    alignItems:"center", 
    }}>
    <span className="progression">Progression</span>
    <div className="completion">
    <div className="slider">
  <div
    className="progress"
    style={{ width: `${completedPercent}%` }}
  ></div>
</div>
    </div>

    </Card>
    <form className="form">
      <input 
      className="input"
      type="text"
      placeholder="Write your task here..."
      value={current}
      onChange={(e)=>setCurrent(e.target.value)}
      />
     <div className="add-button" onClick={() => addTask()}>+</div>
    </form>
    </div>
      </div>


  <div className="lower-div">
  <Card  
    style={{height: "270px",
    width: "470px", 
    display:"flex", 
    justifyContent:"flex-start"
    }}>
      {tasks.map((task,i)=>(
        <div key={i} className="line">
          <span className="bullet"></span>
          <span
      className={`text ${task.done ? 'done' : ''}`}
      onClick={() => toggleTaskDone(i)}
    >
      {task.text}
    </span>
        </div>
      ))}

  </Card>
  </div>
   


    <div className="finish-button">
      <Button text="FINISH DAY" onClick={()=>navigate('finish')}/></div>
    </div>
  </div>
  )
}

export default Display