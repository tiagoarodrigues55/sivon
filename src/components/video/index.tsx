import React from 'react'
import mujica from '../../images/mujica.jpg'
import Styles from './styles'



const Video = () =>{
 
  return (
    <Styles className="components">
      <img src={mujica} alt="mujica"/>
      <button>Aplausos virtuais</button>{/*Achar uma biblioteca para isso! */}
    </Styles>
  )
}
export default Video
