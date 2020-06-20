import React, {useState, ChangeEvent, useEffect} from 'react';

interface Props{
  contat: string
}

const Chat: React.FC<Props> = ({contat}) => {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([''])

  function handleMessage(event: ChangeEvent<HTMLInputElement>){
    setMessage(event.target.value)
  }
  function sendMessage(){
    const Messages = messages
    Messages.push(message)
    setMessages(Messages)
    console.log(messages)
  }
  useEffect(()=>{
    //renderizar as mensagens
  }, [messages])
  return (
    <div> 
      {/* colocar dentro de um form para enviar com enter */}
      <section>
        <h2>{contat}</h2>
        <div>Mensagens</div>
        <input onChange={handleMessage} type="text"/>
        <button onClick={sendMessage}>Enviar mensagem</button>
      </section>
    </div>
  )
}

export default Chat;