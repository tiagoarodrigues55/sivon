import React, { useState } from 'react';
import {AiFillFileText} from "react-icons/ai";


// import { Container } from './styles';
interface Props{
  status: string,
  moderator?: boolean
}
const NewVote: React.FC<Props> = ({status, moderator}) => {
  // nome 
  // documento em questão 
  // botoões com as opções
  // (moções de precedência)
  const [newVote, setNewVote] = useState({
    name: 'Votação a cerca da aprovação do documento1 por completo sem prejuizo de destaques',
    document: 'documento1',
    link: 'https://docs.google.com/document/d/1FYlvqzYqU8xQj-FQSFTdzIGH4hpxkZVzQhg6ewiwJQI/edit'
  })
  if(moderator){
    return (
      <div id={status}>
      <form>
        <input placeholder="Título" type="text"/>
        <input placeholder="descrição" type="text"/>
        <input  type="file"/>
      </form>
      </div>
    
    )
  }
  return (
    <div id={status}>
      <h1>{newVote.name}</h1>
      <h2>{newVote.document} <a target="_blank" rel="noopener noreferrer" href={newVote.link}><AiFillFileText/></a></h2>
      <button id="favorable" onClick={()=>{}} >A favor</button>
      <button id="against" onClick={()=>{}} >Contra</button>
      <button onClick={()=>{}} >Moção com precedência</button>
    </div>
  )
}

export default NewVote;