import React, { useState } from 'react';
import { NOMEM } from 'dns';

// import { Container } from './styles';
interface Props{
  status: string
}
const NewVote: React.FC<Props> = ({status}) => {
  // nome 
  // documento em questão 
  // botoões com as opções
  // (moções de precedência)
  const [newVote, setNewVote] = useState({
    name: 'Votação a cerca da aprovação do documento1 por completo sem prejuizo de destaques',
    document: 'documento1',
  })
  return (
    <div id={status}>
      <h1>{newVote.name}</h1>
      <h2>{newVote.document}</h2>
      <span>icone com link</span>{/*Colocar um icone de arquivo com um link para o arquivo*/}
      <button id="favorable" onClick={()=>{}} >A favor</button>
      <button id="against" onClick={()=>{}} >Contra</button>
      <button onClick={()=>{}} >Moção com precedência</button>
    </div>
  )
}

export default NewVote;