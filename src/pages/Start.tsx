import { useNavigate } from 'react-router-dom'
import Button from '../components/buttons/Button'
import './Start.css'

const Start = () => {

  const navigate = useNavigate();

  return (
    <div className='main'>
      <div className="start-div container">
      <span className='title'>Mauve Productivity</span>
      <div className='img-container'>
      <div className="start-img">
      </div>    
      </div>
      <span><Button text='START' onClick={()=>navigate('/display')}/></span>
      </div>
    </div>
  )
}

export default Start