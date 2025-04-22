import { useNavigate } from "react-router-dom";
import Button from "../components/buttons/Button"

const Finish = () => {

  const navigate = useNavigate(); 

  return (
    <div>
     <div className='main'>
      <div className="start-div container">
      <span className='title'>Keep Going!</span>
      <div className='img-container'>
      <div className="start-img">
      </div>    
      </div>
      <div>Your Final Progress: 10%</div>
      <span><Button text='HOME' onClick={()=>navigate('/')}/></span>
      </div>
    </div>
    </div>
  )
}

export default Finish