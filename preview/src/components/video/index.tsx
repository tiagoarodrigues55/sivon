import React, {useState} from 'react'
import mujica from '../../images/mujica.jpg'
import meet from '../../images/meet.jpg'
import Styles from './styles'

interface Props{
  moderator?: boolean
}

const Video: React.FC<Props> = ({moderator}) =>{
  const [image, setImage] = useState(mujica)
  if(moderator){
    return (
      <Styles className="components">
        <img  src={image} alt="image"/>
        <div>
        <button onClick={()=>{
          if(image===mujica){
            setImage(meet)
          }else{
            setImage(mujica)
          }
        }
          }>Trocar visão</button>
          <button>iniciar/parar cronômetro</button>
          <button>mutar microfones</button>
        </div>
        
      </Styles>
    )
  }
  return (
    <Styles className="components">
      <img src={mujica} alt="mujica"/>
      <button>Aplausos virtuais</button>{/*Achar uma biblioteca para isso! */}
    </Styles>
  )
}
export default Video
