import React, {useState, useEffect, useCallback} from 'react';
import { link } from 'fs';
import Li from './Li'

interface Props{
  contat: string,
  number: number,
  Messages: Message[]
}
interface Message{
    country: string,
    messages: string[]
}

const Chat: React.FC<Props> = ({contat, number, Messages}) => {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  
  useEffect(()=>{
    setMessages(Messages)
  }, [Messages])
  const sendMessage = useCallback((e) => {
    e.preventDefault();
    messages[number].messages.push(message)
    const newMessage = messages
    setMessages(newMessage)
    setMessage('')
  }, [message, messages, number]);

  
 if(!contat){
   contat = 'Brasil'
   number = 1
 }
  return (
    <div id="chat"> 
    {console.log(messages, Messages, number)}
      <section>
        <form onSubmit={sendMessage}>
        <h2>{contat}</h2>
        <div id="messages">
          <ul>
             
             {messages[number] ? messages[number].messages.map(message=>(
                <Li key={message}>{message}</Li>
                  )): <li>Não rolou</li>}
          </ul>
          </div>
        <input onChange={e => setMessage(e.target.value)} value={message} type="text"/>
        {/* <button type="submit" >Enviar mensagem</button> */}
        </form>
      </section>
    </div>
  )
}

export default Chat;