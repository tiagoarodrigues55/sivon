import React, {useState} from 'react';
import Chat from './Chat'

// import { Container } from './styles';

const Chats: React.FC = () => {
  const [contats, setContats] = useState([
    'Argentina',
    'Brasil',
    'Estados Unidos',
    'França',
    'Geórgia',
    'Holanda',
    'Israel',
    'Japão',
    'Mesa',
    'Staff',
    'Imprensa'
  ])
  const [contat, setContat] = useState('')
  function renderContat(contat: string){
    //exibir component Chat
    setContat(contat)
  }
  return (
    <div>
      <ul>
      {contats.map(contat=>(
        <li onClick={()=>renderContat(contat)} key={contat}>{contat}</li>
      ))}
      </ul>
      <Chat contat={contat} />
    </div>
  )
}

export default Chats;