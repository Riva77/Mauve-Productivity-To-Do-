import { useNavigate, useLocation } from "react-router-dom";
import Button from "../components/buttons/Button";
import "./Finish.css"


const Finish = () => {
  const navigate = useNavigate(); 
  const location = useLocation();
  const completedPercent = location.state?.completedPercent ?? 0;

  return (
    <div>
      <div className='main'>
        <div className="start-div container">
          <span className='title'>Keep Going!</span>
          <div className='img-container'>
            <div className="end-img"></div>    
          </div>
          <div className="final">Your Final Progress: {completedPercent.toFixed(0)}%</div>
          <span><Button text='HOME' onClick={()=>navigate("/")}/></span>
        </div>
      </div>
    </div>
  );
};

export default Finish;
