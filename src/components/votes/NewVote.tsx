import React, { useState } from 'react';
import { NOMEM } from 'dns';

// import { Container } from './styles';

const NewVote: React.FC = () => {
  // nome 
  // documento em questão 
  // botoões com as opções
  // (moções de precedência)
  const [newVote, setNewVote] = useState({
    name: 'Votação a cerca da aprovação do documento1 por completo sem prejuizo de destaques',
    document: 'documento1',
  })
  return (
    <div>
      <h1>{newVote.name}</h1>
      <h2>{newVote.document}</h2>
      <span>icone com link</span>{/*Colocar um icone de arquivo com um link para o arquivo*/}
      <button onClick={()=>{}} >A favor</button>
      <button onClick={()=>{}} >Contra</button>
      <button onClick={()=>{}} >Moção com precedência</button>
    </div>
  )
}

export default NewVote;