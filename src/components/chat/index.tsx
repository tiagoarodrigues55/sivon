import React, {useState, useEffect} from 'react';
import Chat from './Chat'
import Styles from './styles'

// import { Container } from './styles';
interface Message{
  country: string,
  messages: string[]
}
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
  const [messages, setMessages] = useState<Message[]>([])

  const [contat, setContat] = useState('')
  function renderContat(contat: string){
    //exibir component Chat
    setContat(contat)
  }
  useEffect(()=>{
    const countries: Message[] = []
    contats.map(contat=>{
      countries.push({
        country: contat,
        messages: []
      })
      return countries
    })
    setMessages(countries)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <Styles className="components">
      <ul>
      {contats.map(contat=>(
        <li onClick={()=>renderContat(contat)} key={contat}>{contat}</li>
      ))}
      </ul>
      <Chat Messages={messages} contat={contat} number={contats.indexOf(contat)} />
    </Styles>
  )
}

export default Chats;