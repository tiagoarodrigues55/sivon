import React, {useState, useEffect} from 'react';
import Chat from './Chat'
import Styles from './styles'


interface Props{
  moderator?: boolean
}
interface Message{
  country: string,
  messages: string[]
}
const Chats: React.FC<Props> = ({moderator}) => {
  const [contats, setContats] = useState([
    "diário",
    'Argentina',
    'Brasil',
    'Estados Unidos',
    'França',
    'Geórgia',
    'Holanda',
    'Israel',
    'Japão',
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

  if (moderator){
    return (
      <Styles className="components">
        <div id="contats">
        <ul>
        {contats.map(contat=>(
          <div className="contat">
  
          <li onClick={()=>renderContat(contat)} key={contat}>{contat}</li>
          </div>
       
        ))}
        <li onClick={()=>renderContat("Popup")}>Popup</li>
        <li onClick={()=>renderContat("Mensagem Geral")}>Mensagem Geral</li>
        </ul>
        </div>
        
        <Chat Messages={messages} contat={contat} number={contats.indexOf(contat)} />
      </Styles>
    )
  }

  return (
    <Styles className="components">
      <div id="contats">
      <ul>
      {contats.map(contat=>(
        <div className="contat">

        <li onClick={()=>renderContat(contat)} key={contat}>{contat}</li>
        </div>
     
      ))}
      </ul>
      </div>
      
      <Chat Messages={messages} contat={contat} number={contats.indexOf(contat)} />
    </Styles>
  )
}

export default Chats;