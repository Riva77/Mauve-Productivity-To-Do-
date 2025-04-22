import './Button.css'


type Props={
    text: string;
    onClick?:()=> void;
}

const Button = ({text,onClick,}:Props) => {
  return (
    <div className="button" onClick={onClick}>
      <span className='name'> 
         {text}
         </span>
    </div>
  )
}

export default Button