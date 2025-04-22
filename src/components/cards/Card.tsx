import { ReactNode } from "react";
import './Style.css'

interface ICardProps {
  children?: ReactNode;
  style?: React.CSSProperties;
}

const Card = ({ children, style }: ICardProps) => {
  return (
    <div style={style} className="card">{children}</div>
  );
};

export default Card;  
